import { type } from "os";
import { Status } from "src/model/data.model";
import { Column, Entity, PrimaryGeneratedColumn } 
from "typeorm";

@Entity()
export class Anime {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    genre: string;

    @Column({
        type: 'enum',
        enum: Status
    })
    status: string;

    @Column()
    episodesNumber: number;

    @Column()
    seasonsNumber: number;
}