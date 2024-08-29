import { Supermercado } from '@prisma/client';
import { IsString} from 'class-validator';


export class CreateSupermercadoDto {

    @IsString()
    name: string

    @IsString()
    description:string

    @IsString()
    addres:string

    @IsString()
    phone:string

    @IsString()
    idCiudad:string
}
