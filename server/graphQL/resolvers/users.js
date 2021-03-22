import { User } from '../../models/User';
export const CREATE_USER = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, password, confirmPassword, email } },
      context,
      info
    ) {
      //TODO: Validate Userdata
      //TODO: Make sure user doesn't exist already
      //TODO: Hash password and create auth token
    },
  },
};
