import { Schema, model } from 'mongoose';

const User = new Schema({
  id: String,
  password: String,
  birth: Number,
  hometown: String,
  Language: String,
  heightcm: {
    type: Number,
    min: 100,
  },
});

export default model('Users', User);
