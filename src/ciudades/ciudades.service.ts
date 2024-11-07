import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateCiudadeDto } from './dto/create-ciudade.dto';
import { UpdateCiudadeDto } from './dto/update-ciudade.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CiudadesService extends PrismaClient implements OnModuleInit{
  private readonly logger = new Logger('SupermercadosService');
  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database connected');
  }
  create(createCiudadeDto: CreateCiudadeDto) {
    return this.ciudad.create({
      data:createCiudadeDto
    })
  }

  findAll() {
    return this.ciudad.findMany({
      include:{
        departamento:true
      }
    })
  }

  findOne(id: string) {
    return this.ciudad.findUnique({
      where:{
        id
      },
      include:{
        departamento:true
      }
    })
  }

  update(id: string, updateCiudadeDto: UpdateCiudadeDto) {
    return this.ciudad.update({
      where:{
        id
      },
      data:updateCiudadeDto
    })
  }

  remove(id: string) {
    return this.ciudad.delete({
      where:{
        id
      }
    })
  }


}
  
