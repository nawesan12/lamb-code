import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/database/client'
import { hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import type { Secret } from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ success: boolean, token: string } | { error: string }>) {
  if(req.method !== "POST") return res.status(400).json({ error: "Use the correct method!" })

  const { user } = req.body

  const encryptedPassword = await hash(user.password, 10)  

  const createdUser = await prisma.user.create({
    data: {
      ...user,
      password: encryptedPassword
    }
  })

  if(!createdUser) return res.status(400).json({ error: "This user does not exists" })

  //@ts-ignore
  delete createdUser.password

  const token = sign(createdUser, process.env.TOKEN_SECRET as Secret, {
    expiresIn: "10d"
  })

  res.status(200).json({ success: true, token })
}
