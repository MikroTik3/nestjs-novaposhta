/**
 * Результат пошуку населених пунктів
 */
export interface SearchSettlementsResponse {
      /**
       * Наявність довідника вулиць
       */
      StreetsAvailability: boolean

      /**
       * Код типу району
       */
      RegionTypesCode: string

      /**
       * Чи доступна адресна доставка
       */
      AddressDeliveryAllowed: boolean

      /**
       * Загальна кількість результатів
       */
      TotalCount: string

      /**
       * Список знайдених населених пунктів
       */
      Addresses: SettlementAddress[]

      /**
       * Кількість відділень
       */
      Warehouses: string

      /**
       * Основна назва населеного пункту
       */
      MainDescription: string

      /**
       * Область
       */
      Area: string

      /**
       * Район
       */
      Region: string

      /**
       * Код типу населеного пункту
       */
      SettlementTypeCode: string

      /**
       * Ref населеного пункту
       */
      Ref: string

      /**
       * Ref міста доставки
       */
      DeliveryCity: string

      /**
       * Повна назва населеного пункту
       */
      Present: string

      /**
       * Тип району
       */
      RegionTypes: string

      /**
       * Код типу області
       */
      ParentRegionCode: string

      /**
       * Тип області
       */
      ParentRegionTypes: string
}

/**
 * Населений пункт
 */
export interface SettlementAddress {
      /**
       * Повна назва населеного пункту
       */
      Present: string

      /**
       * Кількість відділень
       */
      Warehouses: string

      /**
       * Основна назва
       */
      MainDescription: string

      /**
       * Область
       */
      Area: string

      /**
       * Район
       */
      Region: string

      /**
       * Код типу населеного пункту
       */
      SettlementTypeCode: string

      /**
       * Ref населеного пункту
       */
      Ref: string

      /**
       * Ref міста доставки
       */
      DeliveryCity: string

      /**
       * Чи доступна адресна доставка
       */
      AddressDeliveryAllowed: boolean

      /**
       * Наявність довідника вулиць
       */
      StreetsAvailability: boolean

      /**
       * Тип області
       */
      ParentRegionTypes: string

      /**
       * Код типу області
       */
      ParentRegionCode: string

      /**
       * Тип району
       */
      RegionTypes: string

      /**
       * Код типу району
       */
      RegionTypesCode: string
}