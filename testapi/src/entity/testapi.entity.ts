import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Testapi {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public createAt: Date;

    @CreateDateColumn()
    public updateAt: Date;

    @Column()
    public name: string;

    @Column()
    public content: string;
}
