import { BeforeInsert, Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Institution } from "../../institutions/entities/institutions.entity";

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

    @Column()
    institutionId: string;


    @ManyToOne(() => Institution, institution => institution.donations)

    @JoinColumn({ name: 'institutionId' }) 
    institution: Institution;

    @BeforeInsert()
    generateId(){
        this.id = `dev_${nanoid()}`
    }
}
