import { Module } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { DonationsController } from './donations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donation } from './entities/donation.entity';
import { InstitutionsModule } from 'src/institutions/institutions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Donation]), InstitutionsModule],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
