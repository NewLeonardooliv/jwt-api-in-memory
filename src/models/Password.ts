import bcrypt from 'bcrypt';

class Password {
  static async hashPassword(plainTextPassword: string) {
    const saltRounds = 10;

    try {
      const salt = await bcrypt.genSalt(saltRounds);

      const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

      return hashedPassword;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default Password