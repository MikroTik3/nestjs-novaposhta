import { Injectable } from '@nestjs/common';
import { NovaposhtaHttpClient } from "../../core/http/novaposhta.http-client";
import type {
      StatusDocument,
      StatusDocumentRequest, StatusDocumentResponse
} from "./interfaces";

@Injectable()
export class TrackingService {
      private readonly MODEL_NAME = "TrackingDocument"

      public constructor(private readonly http: NovaposhtaHttpClient) {}

      public async getStatusDocuments(data: StatusDocumentRequest): Promise<StatusDocumentResponse[]> {
            return this.http.request<StatusDocumentResponse>(this.MODEL_NAME, "getStatusDocuments", data)
      }

      public async checkTTN(ttns: string | string[], phone?: string,): Promise<StatusDocumentResponse[]> {
            const documents: StatusDocument[] = [];

            if (Array.isArray(ttns)) {

                  for (const ttn of ttns) {
                        documents.push({
                              DocumentNumber: this.clearNumber(ttn),
                              Phone: phone,
                        });
                  }

            } else {

                  documents.push({
                        DocumentNumber: this.clearNumber(ttns),
                        Phone: phone,
                  });

            }

            return this.getStatusDocuments({
                  Documents: documents,
            });
      }

      public async getStatusTTN(ttns: string | string[], phone?: string,): Promise<StatusDocumentResponse[]> {
            return this.checkTTN(ttns, phone);
      }

      private clearNumber(ttn: string): string {
            return ttn.replace(/[^0-9]/g, "")
      }
}