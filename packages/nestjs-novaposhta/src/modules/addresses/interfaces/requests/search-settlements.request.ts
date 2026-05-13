import type { PaginationParams } from "../../../../common/interfaces/common.interface";

/*** 
 * Запит для пошуку населених пунктів (settlements) Nova Poshta 
*/
export interface SearchSettlementsRequest extends PaginationParams {
      /*** Рядок для пошуку населеного пункту
       * Наприклад: "Київ" або "Київська"
       */
      CityName: string
}