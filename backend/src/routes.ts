import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<any> => {
  return res.json({ message: "Hello World" });
});

export { router };