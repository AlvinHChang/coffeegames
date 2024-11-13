import { Router, Request, Response } from 'express';

const router = Router();

router.get('/uppercase', (req: Request, res: Response) => {
  res.send('test');
});

module.exports = {
  routes: router,
};
