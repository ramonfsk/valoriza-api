import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async exeute() {
    const tagsReositories = getCustomRepository(TagRepositories);

    const tags = await tagsReositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };