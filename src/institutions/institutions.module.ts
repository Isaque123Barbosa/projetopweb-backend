// institutions/institutions.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstitutionsService } from './institutions.service';
import { InstitutionsController } from './institutions.controller';
import { Institution } from './entities/institutions.entity'; // Certifique-se do caminho correto

@Module({
  // 1. Importa a entidade Institution no TypeORM para que o repositório possa ser injetado.
  imports: [TypeOrmModule.forFeature([Institution])], 
  
  // 2. Declara o Controller para expor as rotas HTTP.
  controllers: [InstitutionsController],
  
  // 3. Provê o Service para que possa ser injetado no Controller ou em outros Services.
  providers: [InstitutionsService],
  
  // Opcional, mas recomendado: Exportar o Service caso você precise injetá-lo no DonationsModule.
  exports: [InstitutionsService], 
})
export class InstitutionsModule {}