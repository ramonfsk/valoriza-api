import { Request, Response } from "express";
import { ListUsersServices } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersServices = new ListUsersServices();

    const users = await listUsersServices.execute();

    return response.json(users);
  }
}

export { ListUsersController };