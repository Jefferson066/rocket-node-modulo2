import { Request, Response } from "express";

import { ListCategoryUseCase } from "./listCategoryUseCase";

class ListCategoryControler {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoryUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoryControler };
