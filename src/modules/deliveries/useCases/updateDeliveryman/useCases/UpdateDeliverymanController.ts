import { Request, Response } from "express";
import { UpdateDeliveryUseCase } from "./updateDeliverymanUseCase";



export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;
    const { id: id_delivery } = request.params

    const updateDeliverymanUseCase = new UpdateDeliveryUseCase();
    const delivery = await updateDeliverymanUseCase.execute({
      id_deliveryman,
      id_delivery
    })

    return response.json(delivery);
  }
}