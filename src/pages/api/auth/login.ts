import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/database/client'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import type { Secret } from "jsonwebtoken"

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ success: boolean, token: string } | { error: string }>) {
  if(req.method !== "POST") {
    return res.status(400).json({ error: "Use the correct method!" })
  }

  const { identifier, password } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email: identifier
    }
  })

  if(!userExists) {
    return res.status(400).json({ error: "This user does not exists" })
  }

  // const passwordMatches = await compare(password, userExists.password)

  // if(!passwordMatches) {
  //   return res.status(400).json({ success: false, error: "Wrong password"})
  // }

  // //@ts-ignore
  // delete userExists.password

  const token = sign(userExists, process.env.TOKEN_SECRET as Secret, {
    expiresIn: "100 days"
  })

  res.status(200).json({ success: true, token })
}
