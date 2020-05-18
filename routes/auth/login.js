import { Router } from 'express';

import User from '../../models/user';

const router = Router();

router.post('/', async (req, res) => {
  const { id, password } = req.body;
  const user = await User.findOne({ id });
  if (!user) {
    res.sendStatus(404);
    return;
  }

  if (user.password === password) {
    res.sendStatus(200);
    return;
  }

  res.sendStatus(401);
});

export default router;
