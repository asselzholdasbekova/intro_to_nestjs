import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnimeController } from "src/controller/anime.controller";
import { Anime } from "src/entity/anime.entity";
import { AnimeService } from "src/service/anime.service";

@Module({
    controllers: [AnimeController],
    imports: [TypeOrmModule.forFeature([Anime])],
    providers: [AnimeService]
})
export class AnimeModule {}