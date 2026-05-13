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

      /**
       * Отримання списку областей.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a20ee6e4-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @example
       * const areas = await addressService.getAreas();
       *
       * @returns {Promise<AreaResponse[]>}
       * @example
       * [
       *   {
       *     "Ref": "d41443c3-8670-11e4-8ff7-0050568002cf",
       *     "AreasEn": "Cherkasy",
       *     "AreasRu": "Черкасская",
       *     "Description": ""
       *   },
       *   {
       *     "Ref": "d41443c3-8670-11e4-8ff7-0050568002d1",
       *     "AreasEn": "Chernihiv",
       *     "AreasRu": "Черниговская",
       *     "Description": ""
       *   }
       * ]
       */
      public async getAreas(): Promise<AreaResponse[]> {
            return this.http.request<AreaResponse>(this.MODEL_NAME, "getAreas")
      }

      /**
       * Отримання списку міст.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a1e6f0a7-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {CityRequest} data - Параметри запиту
       * @param {string} [data.FindByString] - Строка для пошуку по назві
       * @param {string} [data.Ref] - Reference для пошуку
       * @param {number} [data.Limit] - Кількість результатів (за замовчуванням з конфігу)
       * @param {number} [data.Page] - Номер сторінки
       *
       * @example
       * // Пошук за назвою
       * const cities = await addressService.getCities({
       *   FindByString: 'Киї'
       * });
       *
       * @example
       * // Пошук за Reference
       * const cities = await addressService.getCities({
       *   Ref: 'db5c88f0-391c-11dd-90d9-001a92567626'
       * });
       *
       * @returns {Promise<CityResponse[]>}
       * @example
       * [
       *   {
       *     "Description": "",
       *     "Delivery1": true,
       *     "Delivery2": true,
       *     "Delivery3": true,
       *     "Delivery4": true,
       *     "Delivery5": true,
       *     "Delivery6": true,
       *     "Delivery7": true,
       *     "Delivery8": true,
       *     "City": "Київ",
       *     "CityEN": "Kyiv",
       *     "CityUA": "Київ",
       *     "Ref": "db5c88f0-391c-11dd-90d9-001a92567626",
       *     "Area": "Київська область",
       *     "AreaRef": "d41443c3-8670-11e4-8ff7-0050568002ca",
       *     "SettlementType": "м",
       *     "IsBranch": 0,
       *     "PreventEntryNewStreetsUser": 0,
       *     "Conterminous": 0,
       *     "CityID": 1,
       *     "SpecialCashCheckBoxbehavior": 1,
       *     "RegionType": "область",
       *     "RegionTypeCXML": "область"
       *   }
       * ]
       */
      public async getCities(data: CityRequest): Promise<CityResponse[]> {
            return this.http.request<CityResponse>(this.MODEL_NAME, "getCities", data)
      }

      /**
       * Отримання списку відділень та поштоматів у містах.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a2322f38-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {WarehouseRequest} data - Параметри запиту
       * @param {string} [data.CityName] - Назва міста для пошуку
       * @param {string} [data.CityRef] - Reference міста
       * @param {string} [data.TypeOfWarehouseRef] - Type of Warehouse Reference (1 - відділення, 3 - поштомат)
       * @param {number} [data.Limit] - Кількість результатів
       * @param {number} [data.Page] - Номер сторінки
       *
       * @example
       * // Отримати відділення за назвою міста
       * const warehouses = await addressService.getWarehouses({
       *   CityName: 'Київ',
       *   TypeOfWarehouseRef: '1'
       * });
       *
       * @example
       * // Отримати поштомати за Reference міста
       * const terminals = await addressService.getWarehouses({
       *   CityRef: 'db5c88f0-391c-11dd-90d9-001a92567626',
       *   TypeOfWarehouseRef: '3',
       *   Limit: 50
       * });
       *
       * @returns {Promise<WarehouseResponse[]>}
       * @example
       * [
       *   {
       *     "SiteKey": "1075",
       *     "Description": "Київ, вул. Грушевського, 9 (РП)",
       *     "DescriptionRu": "Киев, ул. Грушевского, 9 (РП)",
       *     "Ref": "e4cd1170-391c-11dd-90d9-001a92567626",
       *     "Number": "1",
       *     "CityRef": "db5c88f0-391c-11dd-90d9-001a92567626",
       *     "CityDescription": "Київ",
       *     "Longitude": 30.532792,
       *     "Latitude": 50.454296,
       *     "Phone": "+380 44 375-80-00",
       *     "TypeOfWarehouse": "841339c7-391d-11dd-90d9-001a92567626",
       *     "Ref": "e4cd1170-391c-11dd-90d9-001a92567626",
       *     "Schedule": [
       *       {
       *         "Monday": "09:00 - 19:00",
       *         "Tuesday": "09:00 - 19:00",
       *         "Wednesday": "09:00 - 19:00",
       *         "Thursday": "09:00 - 19:00",
       *         "Friday": "09:00 - 19:00",
       *         "Saturday": "10:00 - 16:00",
       *         "Sunday": ""
       *       }
       *     ]
       *   }
       * ]
       */
      public async getWarehouses(data: WarehouseRequest): Promise<WarehouseResponse[]> {
            return this.http.request<WarehouseResponse>(this.MODEL_NAME, "getWarehouses", data)
      }

      /**
       * Отримання типів відділень.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a2587b53-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @example
       * const types = await addressService.getWarehouseTypes();
       *
       * @returns {Promise<WarehouseTypesResponse[]>}
       * @example
       * [
       *   {
       *     "Ref": "841339c7-391d-11dd-90d9-001a92567626",
       *     "Description": "Відділення Нова Пошта",
       *     "DescriptionRu": "Отделение Нова Пошта"
       *   },
       *   {
       *     "Ref": "9a68df70-0267-42f8-89bb-df2ff823ae1c",
       *     "Description": "Поштомат",
       *     "DescriptionRu": "Посылкомат"
       *   }
       * ]
       */
      public async getWarehouseTypes(): Promise<WarehouseTypesResponse[]> {
            return this.http.request<WarehouseTypesResponse>(this.MODEL_NAME, "getWarehouseTypes")
      }

      /**
       * Отримання списку відділень у населеному пункті.
       * Працює без авторизації.
       *
       * @since 2022-11-03 НЕ ДОКУМЕНТОВАНО
       *
       * @param {WarehouseSettlementsRequest} data - Параметри запиту
       * @param {string} data.SettlementRef - Reference населеного пункту
       * @param {string} [data.TypeOfWarehouseRef] - Type of Warehouse Reference (опціонально)
       * @param {number} [data.Limit] - Кількість результатів
       *
       * @example
       * const warehouses = await addressService.getWarehouseSettlements({
       *   SettlementRef: '0e3ce3a0-27e5-11dd-9198-001d60451983'
       * });
       *
       * @returns {Promise<WarehouseResponse[]>}
       */
      public async getWarehouseSettlements(data: WarehouseSettlementsRequest): Promise<WarehouseResponse[]> {
            return this.http.request<WarehouseResponse>(this.MODEL_NAME, "getWarehouses", data)
      }

      /**
       * Пошук населених пунктів з довідника Settlements.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a0eb83ab-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {SearchSettlementsRequest} data - Параметри запиту
       * @param {string} data.CityName - Строка для пошуку
       * @param {string} [data.AreaRef] - Reference області
       * @param {number} [data.Limit] - Кількість результатів
       *
       * @example
       * // Простий пошук
       * const settlements = await addressService.searchSettlements({
       *   CityName: 'Київ'
       * });
       *
       * @example
       * // Пошук з обмеженням області
       * const settlements = await addressService.searchSettlements({
       *   CityName: 'Лиман',
       *   AreaRef: 'd41443c3-8670-11e4-8ff7-0050568002ca',
       *   Limit: 10
       * });
       *
       * @returns {Promise<SearchSettlementsResponse[]>}
       * @example
       * [
       *   {
       *     "MainDescription": "м. Київ",
       *     "Ref": "db5c88f0-391c-11dd-90d9-001a92567626",
       *     "Description": "Київ",
       *     "SettlementTypeCode": "м"
       *   },
       *   {
       *     "MainDescription": "Київська область",
       *     "Ref": "d41443c3-8670-11e4-8ff7-0050568002ca",
       *     "Description": "Київська область",
       *     "SettlementTypeCode": "область"
       *   }
       * ]
       */
      public async searchSettlements(data: SearchSettlementsRequest): Promise<SearchSettlementsResponse[]> {
            return this.http.request<SearchSettlementsResponse>(this.MODEL_NAME, "searchSettlements", data)
      }

      /**
       * Пошук вулиць у населених пунктах.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a1329635-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {SearchSettlementStreetsRequest} data - Параметри запиту
       * @param {string} data.SettlementRef - Reference населеного пункту
       * @param {string} data.StreetName - Назва вулиці (мінімум 2 букви)
       * @param {number} [data.Limit] - Кількість результатів
       *
       * @example
       * const streets = await addressService.searchSettlementStreets({
       *   SettlementRef: 'db5c88f0-391c-11dd-90d9-001a92567626',
       *   StreetName: 'Гру'
       * });
       *
       * @returns {Promise<SearchSettlementStreetsResponse[]>}
       * @example
       * [
       *   {
       *     "Description": "Грушевського",
       *     "Ref": "19ce3550-391c-11dd-9198-001d60451983"
       *   },
       *   {
       *     "Description": "Грушевського площа",
       *     "Ref": "0e3ce3a0-27e5-11dd-9198-001d60451983"
       *   }
       * ]
       */
      public async searchSettlementStreets(data: SearchSettlementStreetsRequest): Promise<SearchSettlementStreetsResponse[]> {
            return this.http.request<SearchSettlementStreetsResponse>(this.MODEL_NAME, "searchSettlementStreets", data)
      }

      /**
       * Отримання вулиць у місті по CityRef.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a27c20d7-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {StreetRequest} data - Параметри запиту
       * @param {string} data.CityRef - Reference міста
       * @param {string} [data.FindByString] - Строка для пошуку
       * @param {number} [data.Limit] - Кількість результатів
       * @param {number} [data.Page] - Номер сторінки
       *
       * @example
       * // Отримати всі вулиці міста
       * const streets = await addressService.getStreet({
       *   CityRef: 'db5c88f0-391c-11dd-90d9-001a92567626'
       * });
       *
       * @example
       * // Пошук конкретної вулиці
       * const streets = await addressService.getStreet({
       *   CityRef: 'db5c88f0-391c-11dd-90d9-001a92567626',
       *   FindByString: 'Грушевського'
       * });
       *
       * @returns {Promise<StreetResponse[]>}
       * @example
       * [
       *   {
       *     "Description": "Грушевського",
       *     "Ref": "19ce3550-391c-11dd-9198-001d60451983",
       *     "Number": "101"
       *   }
       * ]
       */
      public async getStreet(data: StreetRequest): Promise<StreetResponse[]> {
            return this.http.request<StreetResponse>(this.MODEL_NAME, "getStreet", data)
      }

      /**
       * Справочник населених пунктів України.
       * Працює без авторизації.
       *
       * @see https://developers.novaposhta.ua/view/model/a0cf0f5f-8512-11ec-8ced-005056b2dbe1/method/a1c42723-8512-11ec-8ced-005056b2dbe1
       * @since 2022-11-03
       *
       * @param {SettlementRequest} data - Параметри запиту
       * @param {string} [data.FindByString] - Строка для пошуку
       * @param {string} [data.AreaRef] - Reference області
       * @param {string} [data.RegionRef] - Reference регіону
       * @param {string} [data.Ref] - Reference населеного пункту
       * @param {string} [data.Warehouse] - Reference відділення
       * @param {number} [data.Page] - Номер сторінки
       *
       * @example
       * // Пошук за назвою
       * const settlements = await addressService.getSettlement({
       *   FindByString: 'Київ'
       * });
       *
       * @example
       * // Пошук за областю
       * const settlements = await addressService.getSettlement({
       *   AreaRef: 'd41443c3-8670-11e4-8ff7-0050568002ca',
       *   Page: 1
       * });
       *
       * @returns {Promise<SettlementResponse[]>}
       * @example
       * [
       *   {
       *     "Description": "Київ",
       *     "Ref": "db5c88f0-391c-11dd-90d9-001a92567626",
       *     "DeliveryCity": "Київ",
       *     "Area": "Київська область",
       *     "AreaDescription": "Київська область",
       *     "Region": "Київське",
       *     "SettlementTypeDescription": "м",
       *     "SettlementType": "м",
       *     "Longitude": 30.523400,
       *     "Latitude": 50.450100
       *   }
       * ]
       */
      public async getSettlement(data: SettlementRequest): Promise<SettlementResponse[]> {
            return this.http.request<SettlementResponse>(this.MODEL_NAME, "getSettlement", data)
      }
}