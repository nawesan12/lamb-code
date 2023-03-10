import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/database/client'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import type { Secret } from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ success: boolean, token: string } | { error: string }>) {
  if(req.method !== "POST") return res.status(400).json({ error: "Use the correct method!" })

  const { identifier, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email: identifier
    }
  })

  if(!user) return res.status(400).json({ error: "This user does not exists" })

  const passwordMatches = await compare(password, user.password)

  if(!passwordMatches) return res.status(400).json({ success: false, error: "Wrong password"})

  //@ts-ignore
  delete user.password

  const token = sign(user, process.env.TOKEN_SECRET as Secret, {
    expiresIn: "10d"
  })

  res.status(200).json({ success: true, token })
}
