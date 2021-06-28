import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const UsersRepository = getCustomRepository(UsersRepositories);

    const user = await UsersRepository.findOne({ email });

    if (!user) {
      throw new Error('Incorrect E-mail or password');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Incorrect E-mail or password');
    }

    const token = sign({ email: user.email }, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}

export { AuthenticateUserService };
