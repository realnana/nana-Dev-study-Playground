import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'crud'})
export class Crud {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;

    @Column()
    content: string;

}