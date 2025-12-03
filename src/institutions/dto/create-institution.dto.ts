import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateInstitutionDto {
    id: string;

    @IsString()
    institutionName: string;
}
