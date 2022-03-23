import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadExists) {
      throw new Error("Category alread exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
