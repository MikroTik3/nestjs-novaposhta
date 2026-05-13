import type { PaginationParams } from "../../../../common/interfaces/common.interface";

/***
 * Запит для пошуку вулиць населеного пункту (settlement) Nova Poshta
 * 
 * Наприклад: "Київ" або "Київська"
 */
export interface SearchSettlementStreetsRequest extends PaginationParams {
      /** Ref населеного пункту (settlement) */
      SettlementRef: string

      /** Рядок для пошуку вулиці населеного пункту
       * Наприклад: "Хрещатик" або "Хрещат"
       */
      StreetName: string
}