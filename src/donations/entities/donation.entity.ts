import { Column } from "typeorm";

export class Donation {
    id: string;

    @Column()
    donatorName: string;
    amount: number;
    date: string;
    donatorCpf: string;
    donatorPhone: string;
    donatorCep: string;
    institutionId: string
}
