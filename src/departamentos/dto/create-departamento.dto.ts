import { IsString } from "class-validator";



export class CreateDepartamentoDto {

    @IsString()
    name: string

}
