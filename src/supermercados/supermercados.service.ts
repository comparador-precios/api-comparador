import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateSupermercadoDto } from './dto/create-supermercado.dto';
import { UpdateSupermercadoDto } from './dto/update-supermercado.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SupermercadosService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('SupermercadosService');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }


  create(createSupermercadoDto: CreateSupermercadoDto) {
    
    return 'This action adds a new supermercado';
  }

  
  findAll() {
    return `This action returns all supermercados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supermercado`;
  }

  update(id: number, updateSupermercadoDto: UpdateSupermercadoDto) {
    return `This action updates a #${id} supermercado`;
  }

  remove(id: number) {
    return `This action removes a #${id} supermercado`;
  }
}
