import { Injectable } from "@nestjs/common";
import { NovaposhtaHttpClient } from "../../core/http/novaposhta.http-client";

import type { 
      AreaResponse, 
      CityResponse, 
      CityRequest, 
      WarehouseRequest, 
      WarehouseResponse 
} from "./interfaces";

@Injectable()
export class AddressService {
      private readonly MODEL_NAME = "Address"

      public constructor(
            public readonly http: NovaposhtaHttpClient
      ) {}

      public async getAreas(): Promise<AreaResponse[]> {
            return this.http.request<AreaResponse>(this.MODEL_NAME, "getAreas")
      }

      public async getCities(data: CityRequest): Promise<CityResponse[]> {
            return this.http.request<CityResponse>(this.MODEL_NAME, "getCities", data)
      }

      public async getWarehouses(data: WarehouseRequest): Promise<WarehouseResponse[]> {
            return this.http.request<WarehouseResponse>(this.MODEL_NAME, "getWarehouse", data)
      }

      public async getWarehouseTypes() {
            return this.http.request(this.MODEL_NAME, "getWarehouseTypes")
      }

      public async getWarehouseSettlements() {
            return this.http.request(this.MODEL_NAME, "getWarehouseSettlements")
      }

      public async searchSettlements() {
            return this.http.request(this.MODEL_NAME, "searchSettlements")
      }

      public async searchSettlementStreets() {
            return this.http.request(this.MODEL_NAME, "searchSettlementStreets")
      }

      public async getStreet() {
            return this.http.request(this.MODEL_NAME, "getStreet")
      }
      
      public async getSettlement() {
            return this.http.request(this.MODEL_NAME, "getSettlement")
      }
}