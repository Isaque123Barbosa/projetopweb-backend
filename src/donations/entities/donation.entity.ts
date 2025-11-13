import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require('nanoid');

@Entity('donations')
export class Donation {
    @PrimaryColumn()
    id: string;

    @Column()
    donatorName: string;

    @Column()
    amount: number;

    @Column()
    date: string;

    @Column()
    donatorCpf: string;

    @Column()
    donatorPhone: string;

    @Column()
    donatorCep: string;

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
