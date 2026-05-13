/**
 * Вулиця населеного пункту
 */
export interface SearchSettlementStreetsResponse {
      /**
       * Ref населеного пункту
       */
      SettlementRef: string

      /**
       * Ref вулиці
       */
      SettlementStreetRef: string

      /**
       * Назва вулиці (укр)
       */
      SettlementStreetDescription: string

      /**
       * Повна адреса для відображення
       */
      Present: string

      /**
       * Ref типу вулиці
       */
      StreetsType: string

      /**
       * Тип вулиці (вул., просп., площа тощо)
       */
      StreetsTypeDescription: string

      /**
       * Координати вулиці
       */
      Location: SettlementStreetLocation

      /**
       * Назва вулиці (рос)
       */
      SettlementStreetDescriptionRu: string
}

/**
 * Геолокація вулиці
 */
export interface SettlementStreetLocation {
      /**
       * Широта
       */
      lat: number

      /**
       * Довгота
       */
      lon: number
}