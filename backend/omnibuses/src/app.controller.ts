import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseGuard } from './common/supabase';
import { CreateOmnibusDto } from './dto/omnibus.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): any {
        return 'ENDPOINT DE PRUEBA!!';
    }

    @UseGuards(SupabaseGuard)
    @Post()
    createOmnibus(
		@Body() dto: CreateOmnibusDto,
    ): any {
        return this.appService.createOmnibus(dto);
    }

    @Get('listado')
    getListado(): any {
        return this.appService.getOminbus();
    }

}
