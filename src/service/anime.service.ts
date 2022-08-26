import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Anime } from "src/entity/anime.entity";
import { DeleteResult, InsertResult, Repository } from "typeorm";

@Injectable()
export class AnimeService {
    constructor(@InjectRepository(Anime) private animeRepository: Repository<Anime>) {}

    async getById(id: number): Promise<Anime> {
        return this.animeRepository.findOneBy({ id });
    }

    async getAll(): Promise<Anime[]> {
        return this.animeRepository.find();
    }

    async create(anime: Anime): Promise<InsertResult> {
        return this.animeRepository.insert(anime);
    }

    async update(id: number, anime: Anime): Promise<Anime> {
        const animeToUpdate = await this.getById(id);
        if(animeToUpdate === undefined) {
            throw new NotFoundException();
        }
        await this.animeRepository.update(id, anime);
        return this.getById(id);
    }

    async delete(id: number): Promise<DeleteResult> {
        const animeToDelete = this.getById(id);
        if(animeToDelete === undefined) {
            throw new NotFoundException();
        }
        return this.animeRepository.delete(id);
    }
}