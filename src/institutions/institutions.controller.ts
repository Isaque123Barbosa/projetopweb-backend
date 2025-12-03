// institutions/institutions.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstitutionsService } from './institutions.service'; // 1. Mudar o Service
import { CreateInstitutionDto } from './dto/create-institution.dto'; // 2. Mudar o DTO de Criação
import { UpdateInstitutionDto } from './dto/update-institution.dto'; // 3. Mudar o DTO de Atualização

// 4. Mudar a rota base de 'donations' para 'institutions'
@Controller('institutions') 
export class InstitutionsController {
  
  // 5. Mudar o nome do Service e o tipo de injeção
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionsService.create(createInstitutionDto);
  }

  /** * GET /institutions
   * Retorna todas as instituições 
   */
  @Get()
  findAll() {
    return this.institutionsService.findAll();
  }

  /** * GET /institutions/:id
   * Retorna uma instituição pelo ID 
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionsService.findOne(id);
  }

  /** * PATCH /institutions/:id
   * Atualiza uma instituição pelo ID 
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto) {
    return this.institutionsService.update(id, updateInstitutionDto);
  }

  /** * DELETE /institutions/:id
   * Remove uma instituição pelo ID 
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionsService.remove(id);
  }
}