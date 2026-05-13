import { Injectable } from "@nestjs/common";
import { NovaposhtaHttpClient } from "../../core/http/novaposhta.http-client";

import type { 
      AreaResponse, 
      CityResponse, 
      CityRequest, 
      WarehouseRequest, 
      WarehouseResponse,
      WarehouseTypesResponse,
      WarehouseSettlementsRequest,
      SearchSettlementsRequest,
      SearchSettlementStreetsRequest,
      SearchSettlementStreetsResponse,
      SearchSettlementsResponse,
      StreetResponse,
      StreetRequest,
      SettlementResponse,
      SettlementRequest
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
            return this.http.request<WarehouseResponse>(this.MODEL_NAME, "getWarehouses", data)
      }

      public async getWarehouseTypes(): Promise<WarehouseTypesResponse[]> {
            return this.http.request<WarehouseTypesResponse>(this.MODEL_NAME, "getWarehouseTypes")
      }

      public async getWarehouseSettlements(data: WarehouseSettlementsRequest): Promise<WarehouseResponse[]> {
            return this.http.request<WarehouseResponse>(this.MODEL_NAME, "getWarehouses", data)
      }

      public async searchSettlements(data: SearchSettlementsRequest): Promise<SearchSettlementsResponse[]> {
            return this.http.request<SearchSettlementsResponse>(this.MODEL_NAME, "searchSettlements", data)
      }

      public async searchSettlementStreets(data: SearchSettlementStreetsRequest): Promise<SearchSettlementStreetsResponse[]> {
            return this.http.request<SearchSettlementStreetsResponse>(this.MODEL_NAME, "searchSettlementStreets", data)
      }

      public async getStreet(data: StreetRequest): Promise<StreetResponse[]> {
            return this.http.request<StreetResponse>(this.MODEL_NAME, "getStreet", data)
      }

      public async getSettlement(data: SettlementRequest): Promise<SettlementResponse[]> {
            return this.http.request<SettlementResponse>(this.MODEL_NAME, "getSettlement", data)
      }
}