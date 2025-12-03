// institutions/institutions.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Institution } from './entities/institutions.entity'; // Certifique-se do caminho correto
import { CreateInstitutionDto } from './dto/create-institution.dto'; // Crie este DTO
import { UpdateInstitutionDto } from './dto/update-institution.dto';

@Injectable()
export class InstitutionsService {

  constructor(
    // 💡 Injeta o repositório da entidade Institution
    @InjectRepository(Institution)
    private readonly repository: Repository<Institution>,
  ) {}

  // --- MÉTODOS CRUD PARA INSTITUTION ---

  /** Cria uma nova instituição */
  async create(dto: CreateInstitutionDto): Promise<Institution> {
    const institution = this.repository.create(dto);
    return this.repository.save(institution);
  }

  /** Retorna todas as instituições */
  findAll(): Promise<Institution[]> {
    return this.repository.find();
  }

  /** Retorna uma instituição pelo ID */
  async findOne(id: string): Promise<Institution> {
    const institution = await this.repository.findOneBy({ id });
    if (!institution) {
      throw new NotFoundException(`Instituição com ID '${id}' não encontrada.`);
    }
    return institution;
  }

  /** Atualiza uma instituição pelo ID */
  async update(id: string, dto: UpdateInstitutionDto): Promise<Institution> {
    const institution = await this.findOne(id); // Reusa o findOne para validar
    
    this.repository.merge(institution, dto);
    return this.repository.save(institution);
  }

  /** Remove uma instituição pelo ID */
  async remove(id: string): Promise<void> {
    const institution = await this.findOne(id); // Reusa o findOne para validar
    await this.repository.remove(institution);
  }

  /** Remove todas as instituições (usar com cautela) */
  async removeAll(): Promise<any> {
    // Retorna o resultado da operação de exclusão em massa
    return this.repository.delete({}); 
  }
}