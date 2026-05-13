import type { PaginationParams } from "../../../../common/interfaces/common.interface"

/**
 * Запит для отримання довідника населених пунктів Nova Poshta
 */
export interface SettlementRequest extends PaginationParams  {
      /**
       * Ref області
       */
      AreaRef?: string

      /**
       * Ref населеного пункту
       */
      Ref?: string

      /**
       * Ref району
       */
      RegionRef?: string

      /**
       * Фільтр наявності відділень (1/0)
       */
      Warehouse?: string
}