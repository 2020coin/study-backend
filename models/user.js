import { Schema, model } from 'mongoose';

const User = new Schema({
  id: String,
  password: String,
});

export default model('Users', User);
