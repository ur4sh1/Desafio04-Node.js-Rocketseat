import { User } from "modules/users/model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExist = this.usersRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new Error("Email Already Existis!");
    }

    this.usersRepository.create({ email, name });

    return userAlreadyExist;
  }
}

export { CreateUserUseCase };
