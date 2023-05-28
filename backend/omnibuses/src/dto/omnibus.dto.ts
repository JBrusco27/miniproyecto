import { IsNumber, IsString } from 'class-validator';

export class CreateOmnibusDto {
	@IsString()
	suggestion_text!: string;
    
	@IsString()
    omnibus_matricula: string;

    @IsString()
    omnibus_marca: string;

    @IsNumber()
    omnibus_pasajeros: number;

    @IsNumber()
    omnibus_altura: number;

    @IsNumber()
    omnibus_peso: number;

    @IsNumber()
    omnibus_largo: number;

    @IsNumber()
    omnibus_ejes: number;

    @IsString()
    omnibus_empresa: string;
}
