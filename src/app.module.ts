import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DonationsModule } from './donations/donations.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities:[__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    DonationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
