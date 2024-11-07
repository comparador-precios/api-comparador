import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DepartamentosService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('SupermercadosService');


  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }
  create(createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamento.create({
      data:createDepartamentoDto
    })
  }

  findAll() {
    return this.departamento.findMany();
  }

  findOne(id: string) {
    return this.departamento.findUnique({
      where:{
        id
      }
    })
  }

  update(id:string, updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamento.update({
      where:{
        id
      },
      data:updateDepartamentoDto
    })
  }

  remove(id: string) {
    return this.departamento.delete({
      where:{
        id
      }
    })
  }
}
