import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
      required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
      required: true,
    default: false
  },
}, {
    timestamps: true
});

usersSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', usersSchema)

export default User;

