/**
 * Вулиця населеного пункту
 */
export interface StreetResponse {
      /**
       * Ref вулиці
       */
      Ref: string

      /**
       * Назва вулиці українською мовою
       */
      Description: string

      /**
       * Ref типу вулиці
       */
      StreetsTypeRef: string

      /**
       * Тип вулиці
       */
      StreetsType: string
}