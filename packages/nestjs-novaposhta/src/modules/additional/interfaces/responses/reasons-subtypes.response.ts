/**
 * Підтип причини повернення.
 */
export interface ReasonSubtypesResponse {
      /**
       * Ідентифікатор підтипу причини (REF).
       */
      Ref: string

      /**
       * Опис підтипу причини українською мовою.
       */
      Description: string

      /**
       * Ідентифікатор основної причини повернення.
       */
      ReasonRef: string
}