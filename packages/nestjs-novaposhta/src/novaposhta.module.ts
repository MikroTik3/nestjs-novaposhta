import { type DynamicModule, Global, Module } from "@nestjs/common";
import {
	type NovaposhtaModuleAsyncOptions,
	type NovaposhtaModuleOptions,
	NovaposhtaOptionsSymbol
} from './common/interfaces'

import { NovaposhtaService } from "./novaposhta.service";
import { NovaposhtaHttpClient } from "./core/http/novaposhta.http-client";

import { AddressModule } from "./modules/addresses/address.module";
import { TrackingModule } from "./modules/tracking/tracking.module";
import { PaymentModule } from "./modules/payment/payment.module";

@Global()
@Module({})
export class NovaposhtaModule {
      public static forRoot(options: NovaposhtaModuleOptions): DynamicModule {
            return {
                  module: NovaposhtaModule,
                  imports: [
                        AddressModule,
                        TrackingModule,
                        PaymentModule
                  ],
                  providers: [
                        {
                              provide: NovaposhtaOptionsSymbol,
                              useValue: options,
                        },
                        {
                              provide: NovaposhtaHttpClient,
                              useFactory: (cfg: NovaposhtaModuleOptions) => new NovaposhtaHttpClient(cfg),
                              inject: [NovaposhtaOptionsSymbol]
                        },

                        NovaposhtaService,
                  ],
                  exports: [NovaposhtaService, NovaposhtaHttpClient],
                  global: true,
            };
      }

      public static forRootAsync(options: NovaposhtaModuleAsyncOptions): DynamicModule {
            return {
                        module: NovaposhtaModule,
                        imports: [
                              ...(options.imports || []),
                              AddressModule,
                              TrackingModule,
                              PaymentModule
                        ],
                        providers: [
                              {
                                    provide: NovaposhtaOptionsSymbol,
                                    useFactory: options.useFactory,
                                    inject: options.inject || []
                              },

                              {
                                    provide: NovaposhtaHttpClient,
                                    useFactory: (cfg: NovaposhtaModuleOptions) =>
                                          new NovaposhtaHttpClient(cfg),
                                    inject: [NovaposhtaOptionsSymbol]
                              },

                              NovaposhtaService
                        ],
                        exports: [NovaposhtaService, NovaposhtaHttpClient],
                        global: true
            };
      }
}