import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryControler } from "./listCategoryControler";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoryControler = new ListCategoryControler(listCategoryUseCase);

export { listCategoryControler };
