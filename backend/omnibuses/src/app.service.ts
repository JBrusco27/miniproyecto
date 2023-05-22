import { Injectable } from '@nestjs/common';
import { Supabase } from './common/supabase';

import { createClient } from '@supabase/supabase-js'


@Injectable()
export class AppService {

    constructor(private readonly supabase: Supabase) { }

    async getOminbus(): Promise<any> {
        const result = await this.supabase.getClient()
            .from('omnibus')
            .select()
        return result;
    }

    async createOmnibus() {
        const result = await this.supabase.getClient()
            .from('omnibus')
            .insert( {
                "omnibus_matricula": "SCU-4886",
                "omnibus_marca": "JAC",
                "omnibus_pasajeros": 33,
                "omnibus_altura": 2.5,
                "omnibus_peso": 3000,
                "omnibus_largo": 3.5,
                "omnibus_ejes": 6,
                "omnibus_empresa": "Omnibuses del Uruguay 2"
            });
        return result;
    }
}
