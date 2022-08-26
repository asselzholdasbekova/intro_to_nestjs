import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Anime } from "src/entity/anime.entity";
import { AnimeService } from "src/service/anime.service";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

@Controller()
export  class AnimeController {
    constructor(private animeService: AnimeService) {}

    @Get()
    getAll(): Promise<Anime[]> {
        return this.animeService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: number): Promise<Anime> {
        return this.animeService.getById(id);
    }

    // returns form for creating new anime
    @Get('/new')
    newAnime() {}

    @Post()
    create(@Body() anime: Anime): Promise<InsertResult> {
        return this.animeService.create(anime);
    }

    //returns form for updating the anime
    @Get(':id/edit')
    editAnime() {}

    @Patch(':id')
    update(@Param('id') id: number, @Body() anime: Anime): Promise<Anime> {
        return this.animeService.update(id, anime);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<DeleteResult> {
        return this.animeService.delete(id);
    }
}