import { IsString } from "class-validator"


export class CreateCiudadeDto {

    @IsString()
    name:string

    @IsString()
    idDepartamento:string
}
