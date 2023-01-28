import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const { topic } = req.query

  res.status(200).json(topic as string)
}
