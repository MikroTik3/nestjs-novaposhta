import type { DocumentEnum } from "../../enums"

/**
 * Запит на створення заявки (save).
 */
export interface SaveRequest {
      /**
       * Номер ТТН (експрес-накладної).
       */
      ttn: string

      /**
       * Тип заявки.
       */
      ownerDocumentType?: DocumentEnum
}