// create-donation.dto.ts

import { IsDateString, IsNumber, IsString, IsNotEmpty, IsUUID, IsOptional, IsPositive } from "class-validator";

export class CreateDonationDto {
    // 💡 O ID não deve ser incluído aqui, pois ele é gerado automaticamente
    //    pelo método @BeforeInsert na sua entidade.

    @IsNotEmpty({ message: 'O nome do doador é obrigatório.' })
    @IsString()
    donatorName: string;
    
    @IsNotEmpty({ message: 'O valor da doação é obrigatório.' })
    @IsNumber({}, { message: 'O valor da doação deve ser um número.' })
    @IsPositive({ message: 'O valor da doação deve ser positivo.' })
    amount: number;

    // Embora você use string na entidade, IsDateString garante um formato de data válido.
    @IsNotEmpty({ message: 'A data da doação é obrigatória.' })
    @IsDateString()
    date: string;

    @IsNotEmpty({ message: 'O CPF do doador é obrigatório.' })
    @IsString()
    donatorCpf: string;

    @IsNotEmpty({ message: 'O telefone do doador é obrigatório.' })
    @IsString()
    donatorPhone: string;

    @IsNotEmpty({ message: 'O CEP do doador é obrigatório.' })
    @IsString()
    donatorCep: string;

    // 🔑 PROPRIEDADE CHAVE E FALTANTE: A chave estrangeira para a Instituição
    @IsNotEmpty({ message: 'O ID da instituição é obrigatório.' })
    @IsString({ message: 'O ID da instituição deve ser uma string.' })
    // Se o ID for um UUID ou outro formato específico, use a validação apropriada.
    // Exemplo: @IsUUID('4', { message: 'O ID da instituição deve ser um UUID válido.' })
    institutionId: string; 

    // O relacionamento "institution" em si é um objeto de entidade
    // e não deve ser passado diretamente no DTO de criação, pois o Service
    // só precisa do institutionId para encontrar a entidade.
}