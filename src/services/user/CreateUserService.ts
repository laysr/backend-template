import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { UsersRepositories } from '../../repositories/UsersRepositories';
import { User } from '../../entities/User';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async create({ name, email, password }: IUserRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error('Email is required');
    }

    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({ email, name, password: passwordHash });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
