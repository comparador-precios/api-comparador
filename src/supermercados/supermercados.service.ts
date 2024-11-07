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
    return this.supermercado.create({
      data:createSupermercadoDto
    }) 
  }

  
  findAll() {
    return this.supermercado.findMany({
      include:{
        ciudad:true
      }
    })
  }

  findOne(id: string) {
    return this.supermercado.findUnique({
      where:{id},
      include:{
        ciudad:{
          include:{
            departamento:true
          }
        }
      },
    })
  }

  update(id: string, updateSupermercadoDto: UpdateSupermercadoDto) {
    return this.supermercado.update({
      where:{
        id
      },
      data:updateSupermercadoDto
    })
  }

  remove(id: string) {
    return this.supermercado.delete({
      where:{
        id
      }
    })
  }
}
