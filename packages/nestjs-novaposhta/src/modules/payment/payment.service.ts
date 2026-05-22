import { Injectable } from "@nestjs/common";
import { NovaposhtaHttpClient } from "../../core/http/novaposhta.http-client";
import type { WalletManagmentResponse } from "./interfaces";

@Injectable()
export class PaymentService {
      private readonly MODEL_NAME = "TrackingDocument"

      public constructor(private readonly http: NovaposhtaHttpClient) {}
      
      public async walletManagement(): Promise<WalletManagmentResponse[]> {
            return this.http.request<WalletManagmentResponse>(this.MODEL_NAME, "walletManagement")
      }
} 