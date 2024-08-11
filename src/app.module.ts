import { Module } from '@nestjs/common';
import { SupermercadosModule } from './supermercados/supermercados.module';

@Module({
  imports: [SupermercadosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
