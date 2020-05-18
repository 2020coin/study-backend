import { Router } from 'express';

import User from '../../models/user';

const router = Router();

router.post('/', async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findOne({ id });
    if (user.password === password) {
      res.sendStatus(200);
      return;
    }
  
    res.sendStatus(401);
  } catch (err) {
    res.sendStatus(err.response.status);
  }
});

export default router;