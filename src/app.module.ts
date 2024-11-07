import { Module } from '@nestjs/common';
import { SupermercadosModule } from './supermercados/supermercados.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { CiudadesModule } from './ciudades/ciudades.module';

@Module({
  imports: [SupermercadosModule, DepartamentosModule, CiudadesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
