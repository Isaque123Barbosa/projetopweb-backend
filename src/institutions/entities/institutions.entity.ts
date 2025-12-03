import { BeforeInsert, Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { Donation } from "../../donations/entities/donation.entity";

const { nanoid } = require('nanoid');

@Entity('institutions')
export class Institution {
    @PrimaryColumn()
    id: string;

    @Column()
    institutionName: string;

    @OneToMany(() => Donation, donation => donation.institution)
    donations: Donation[];

    @BeforeInsert()
    generateId(){
        this.id = `inst_${nanoid()}`
    }
}
