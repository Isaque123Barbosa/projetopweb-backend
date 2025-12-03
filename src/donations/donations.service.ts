import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Repository } from 'typeorm';
import { Donation } from './entities/donation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InstitutionsService } from 'src/institutions/institutions.service';

@Injectable()
export class DonationsService {

  constructor(
    @InjectRepository(Donation)
    private readonly repository: Repository<Donation>,
  ){

  }

  create(dto: CreateDonationDto) {
    const donation = this.repository.create(dto);
    return this.repository.save(donation);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({id});
  }

  async update(id: string, dto: UpdateDonationDto) {
    const donation = await this.repository.findOneBy({id});
    if(!donation) return null;
    this.repository.merge(donation, dto);
    return this.repository.save(donation);
  }

  async remove(id: string) {
    const donation = await this.repository.findOneBy({id});
    if(!donation) return null;
    return this.repository.remove(donation);
  }

  async removeByName(donatorName: string) {
    const donation = await this.repository.findOneBy({donatorName});
    if(!donation) return null;
    return this.repository.remove(donation);
  }

  async removeAll() {
  // Use o método delete, mas passe uma condição vazia ou 'true'
  // Dependendo da sua ORM (TypeORM), você pode precisar de uma sintaxe específica.
  // Uma das formas mais comuns é:

  const result = await this.repository.delete({});
  
  // Alternativamente, para garantir a exclusão em massa:
  // const result = await this.repository.clear(); // Limpa a tabela completamente (recomeça a contagem de ID)
  
  return result;
  }
}
