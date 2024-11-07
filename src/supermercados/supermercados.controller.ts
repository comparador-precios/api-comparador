import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupermercadosService } from './supermercados.service';
import { CreateSupermercadoDto } from './dto/create-supermercado.dto';
import { UpdateSupermercadoDto } from './dto/update-supermercado.dto';

@Controller('supermercados')
export class SupermercadosController {
  constructor(private readonly supermercadosService: SupermercadosService) {}

  @Post()
  create(@Body() createSupermercadoDto: CreateSupermercadoDto) {
    return this.supermercadosService.create(createSupermercadoDto);
  }

  @Get()
  findAll() {
    return this.supermercadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supermercadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSupermercadoDto: UpdateSupermercadoDto) {
    return this.supermercadosService.update(id, updateSupermercadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supermercadosService.remove(id);
  }
}
