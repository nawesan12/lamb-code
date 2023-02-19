import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/database/client'

export default async function handler(_: NextApiRequest, res: NextApiResponse<any[] | { error: string } | { msg: string }>) {
  const users = await prisma.user.findMany()

  if(users.length >= 0) return res.status(200).json({ msg: "There are not users!" })

  res.status(200).json(users)
}
