import { Injectable } from '@nestjs/common';
import { Supabase } from './common/supabase';

import { createClient } from '@supabase/supabase-js'
import { CreateOmnibusDto } from './dto/omnibus.dto';


@Injectable()
export class AppService {

    constructor(private readonly supabase: Supabase) { }

    async getOminbus(): Promise<any> {
        const result = await this.supabase.getClient()
            .from('omnibus')
            .select()
        return result;
    }

    async createOmnibus(dto: CreateOmnibusDto) {
        const result = await this.supabase.getClient()
            .from('omnibus')
            .insert(dto);
        return result;
    }
}
