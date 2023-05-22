import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ExtractJwt } from 'passport-jwt';

interface OmnibusDb {
    public: {
      Tables: {
        omnibus: any
      }
    }
  }


@Injectable({ scope: Scope.REQUEST })
export class Supabase {
    private readonly logger = new Logger(Supabase.name);
    private clientInstance: SupabaseClient;

    constructor(
        @Inject(REQUEST) private readonly request: Request,
        private readonly configService: ConfigService,
    ) { }

    getClient() {
        if (this.clientInstance) {
            this.logger.log('client exists - returning for current Scope.REQUEST');
            return this.clientInstance;
        }

        this.logger.log('initialising new supabase client for new Scope.REQUEST');

        console.log(this.configService.get('SUPABASE_URL'));
        console.log(this.configService.get('SUPABASE_KEY'));

        this.clientInstance = createClient<OmnibusDb>(
            this.configService.get('SUPABASE_URL'),
            this.configService.get('SUPABASE_KEY'),
            {
                db: {
                    schema: 'public'
                },
                global: {
                    headers: {
                        Authorization: `Bearer ` + ExtractJwt.fromAuthHeaderAsBearerToken()(this.request)
                    }
                },
                auth: {
                    autoRefreshToken: true,
                    detectSessionInUrl: false,
                }
            },
        );

        return this.clientInstance;
    }
}
