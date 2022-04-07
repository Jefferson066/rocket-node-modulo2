import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryControler } from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoryControler.handle(req, res);
});
export { categoriesRoutes };
