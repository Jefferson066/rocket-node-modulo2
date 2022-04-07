import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification alread exists!");
    }

    this.specificationRepository.create({
      name,
      description,
    });
  }
}
