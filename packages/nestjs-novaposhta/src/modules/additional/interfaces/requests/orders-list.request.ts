import type { PaginationParams } from "../../../../common/interfaces"

/**
 * Запит на отримання списку заявок на повернення.
 *
 * Метод: getReturnOrdersList
 * Модель: AdditionalServiceGeneral
 */
export interface OrdersListRequest extends PaginationParams {
      /**
       * Номер заявки на повернення.
       */
      Number?: string

      /**
       * Ідентифікатор (REF) заявки на повернення.
       */
      Ref?: string

      /**
       * Дата створення "з" (формат: дд.мм.рррр).
       */
      BeginDate?: string

      /**
       * Дата створення "до" (формат: дд.мм.рррр).
       */
      EndDate?: string
}