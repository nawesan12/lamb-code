import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if(req.method !== "POST") return res.status(400).json({ error: "Use the correct method!" })

  const { topic } = req.query

  if(!topic) return res.status(400).json({ error: "You did not send any topic to search!" })

  res.status(200).json({ topic })
}