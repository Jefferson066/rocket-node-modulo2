import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadExists = categoriesRepository.findByName(name);

  if (categoryAlreadExists) {
    response.status(400).json({ error: "Category alread exists!" });
  }

  categoriesRepository.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();
  return res.json(all);
});
export { categoriesRoutes };
