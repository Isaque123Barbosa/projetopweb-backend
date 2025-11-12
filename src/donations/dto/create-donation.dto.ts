import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateDonationDto {
    id: string;

    @IsString()
    donatorName: string;
    
    @IsNumber()
    amount: number;

    @IsDateString()
    date: string;

    @IsString()
    donatorCpf: string;

    @IsString()
    donatorPhone: string;

    @IsString()
    donatorCep: string;
}
