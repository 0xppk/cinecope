import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "~/utils/serverAuth";
import { prisma } from "~/server/db";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") res.status(405).end();

  try {
    await serverAuth(req);


  } catch (error) {
    console.log(error);
    return res.status(404).end();
  }
}
