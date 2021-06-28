import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UserController {
  async handleCreateUser(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, password });

    return response.json(user);
  }
}

export { UserController };
