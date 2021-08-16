import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      console.log(user_id);

      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
