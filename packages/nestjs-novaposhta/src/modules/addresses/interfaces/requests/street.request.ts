import type { QueryParams } from '../../../../common/types/query.types'

/**
 * Запит для отримання довідника вулиць Nova Poshta
 */
export interface StreetRequest extends QueryParams {
      /**
       * Ref міста
       */
      CityRef: string
}