import { Injectable } from "@nestjs/common";
import { NovaposhtaHttpClient } from "../../core/http/novaposhta.http-client";

import type { 
      CheckPossibilityCreateReturnRequest, 
      CheckPossibilityCreateReturnResponse,
      OrdersListRequest,
      OrdersListResponse,
      ReasonResponse,
      ReasonsSubtypesRequest,
      ReasonSubtypesResponse,
      RedirectPossibility,
      RedirectionOrdersListRequest,
      RedirectionOrdersListResponse,
      DeleteRequest,
      DeleteResposne,
      CheckPossibilityChangeEWRequest
} from "./interfaces";

@Injectable()
export class AdditionalService {
      private readonly MODEL_NAME = "AdditionalService"

      public constructor(
            private readonly http: NovaposhtaHttpClient
      ) {}

      public async checkPossibilityCreateReturn(data: CheckPossibilityCreateReturnRequest): Promise<CheckPossibilityCreateReturnResponse[]> {
            return this.http.request<CheckPossibilityCreateReturnResponse>(this.MODEL_NAME, "CheckPossibilityCreateReturn", data)
      }

      public async getReturnReasons(): Promise<ReasonResponse[]> {
            return this.http.request<ReasonResponse>(this.MODEL_NAME, "getReturnReasons")
      }

      public async getReturnReasonsSubtypes(data: ReasonsSubtypesRequest): Promise<ReasonSubtypesResponse[]> {
            return this.http.request<ReasonSubtypesResponse>(this.MODEL_NAME, "getReturnReasonsSubtypes", data)
      }

      public async getReturnOrdersList(data: OrdersListRequest): Promise<OrdersListResponse[]> {
            return this.http.request<OrdersListResponse>(this.MODEL_NAME, "getReturnOrdersList", data)
      }

      public async checkPossibilityForRedirecting(data: CheckPossibilityCreateReturnResponse): Promise<RedirectPossibility[]> {
            return this.http.request<RedirectPossibility>(this.MODEL_NAME, "checkPossibilityForRedirecting", data)
      }

      // public async save(data: any): Promise<any> {
      //       return this.http.request<any>(this.MODEL_NAME, "save", data)
      // }

      // public async saveRedirecting() {

      // }

      public async getRedirectionOrdersList(data: RedirectionOrdersListRequest): Promise<RedirectionOrdersListResponse[]> {
            return this.http.request<RedirectionOrdersListResponse>(this.MODEL_NAME, "getRedirectionOrdersList", data)
      }

      public async delete(data: DeleteRequest): Promise<DeleteResposne[]> {
            return this.http.request<DeleteResposne>(this.MODEL_NAME, "delete", data)
      }

      public async checkPossibilityChangeEW(data: CheckPossibilityChangeEWRequest): Promise<CheckPossibilityCreateReturnResponse[]> {
            return this.http.request<CheckPossibilityCreateReturnResponse>(this.MODEL_NAME, "CheckPossibilityChangeEW", data)
      }

      // public async saveAddTerm() {

      // }

      // public async saveChangeCash() {

      // }

      // public async saveChangeAfterpaymentType() {

      // }
}