import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    try {
      this.createUserUseCase.execute({ email, name });
      return response.status(201).send();
    } catch (error) {
      return response.status(201).json({
        error: error.message,
      });
    }
  }
}

export { CreateUserController };
