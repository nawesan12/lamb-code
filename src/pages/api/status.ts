import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_: NextApiRequest, res: NextApiResponse<string>) {
  const status: string = "🟢 All systems stable" 

  res.setDefaultEncoding("utf-8")

  res.status(200).send(status)
}
