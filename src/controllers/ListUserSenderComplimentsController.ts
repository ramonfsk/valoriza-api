import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSenderComplimentsController };