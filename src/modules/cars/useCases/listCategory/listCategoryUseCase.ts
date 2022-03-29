import { Category } from "../../model/category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
