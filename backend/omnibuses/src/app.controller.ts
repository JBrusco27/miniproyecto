import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SupabaseGuard } from './common/supabase';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @UseGuards(SupabaseGuard)
    @Get()
    getHello(): any {
        return this.appService.getOminbus();
    }

    @UseGuards(SupabaseGuard)
    @Post()
    createOmnibus(): any {
        return this.appService.createOmnibus();
    }
}
