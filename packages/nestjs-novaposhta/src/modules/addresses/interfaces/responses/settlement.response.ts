/**
 * Населений пункт Nova Poshta
 */
export interface SettlementResponse {
      /**
       * Ref населеного пункту
       */
      Ref: string

      /**
       * Ref типу населеного пункту
       */
      SettlementType: string

      /**
       * Широта
       */
      Latitude: string

      /**
       * Довгота
       */
      Longitude: string

      /**
       * Назва населеного пункту українською мовою
       */
      Description: string

      /**
       * Назва населеного пункту російською мовою
       */
      DescriptionRu: string

      /**
       * Тип населеного пункту українською мовою
       */
      SettlementTypeDescription: string

      /**
       * Тип населеного пункту російською мовою
       */
      SettlementTypeDescriptionRu: string

      /**
       * Код району
       */
      Region: string

      /**
       * Назва району українською мовою
       */
      RegionsDescription: string

      /**
       * Назва району російською мовою
       */
      RegionsDescriptionRu: string

      /**
       * Ref області
       */
      Area: string

      /**
       * Назва області українською мовою
       */
      AreaDescription: string

      /**
       * Назва області російською мовою
       */
      AreaDescriptionRu: string

      /**
       * Початковий індекс
       */
      Index1: string

      /**
       * Кінцевий індекс
       */
      Index2: string

      /**
       * Діапазон КОАТУУ
       */
      IndexCOATSU1: string

      /**
       * Доставка у понеділок
       */
      Delivery1: string

      /**
       * Доставка у вівторок
       */
      Delivery2: string

      /**
       * Доставка у середу
       */
      Delivery3: string

      /**
       * Доставка у четвер
       */
      Delivery4: string

      /**
       * Доставка у п’ятницю
       */
      Delivery5: string

      /**
       * Доставка у суботу
       */
      Delivery6: string

      /**
       * Доставка у неділю
       */
      Delivery7: string

      /**
       * Наявність відділень (1/0)
       */
      Warehouse: string

      /**
       * Конгломерати
       */
      Conglomerates: string[]
}