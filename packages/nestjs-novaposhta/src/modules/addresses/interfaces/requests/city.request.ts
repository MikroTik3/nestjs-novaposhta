import type { QueryParams } from "../../../../common/types/query.types";

/**
 * Запит для отримання міст (Nova Poshta)
 */
export interface CityRequest extends QueryParams {
      /**
      * Ідентифікатор міста (Ref, 36 символів)
      */
      Ref?: string;
}