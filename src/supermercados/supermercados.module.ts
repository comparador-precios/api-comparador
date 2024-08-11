import { Module } from '@nestjs/common';
import { SupermercadosService } from './supermercados.service';
import { SupermercadosController } from './supermercados.controller';

@Module({
  controllers: [SupermercadosController],
  providers: [SupermercadosService],
})
export class SupermercadosModule {}
