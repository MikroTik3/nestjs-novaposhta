/**
 * Запит для отримання населених пунктів (settlements) Nova Poshta
 */
export interface WarehouseSettlementsRequest {
      /**
       * Ref населеного пункту
       */
      Ref: string

      /**
       * Ref типу відділення
       */
      TypeOfWarehouseRef?: string

      /**
       * Наявність PostFinance
       */
      PostFinance?: number
}