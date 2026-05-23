/**
 * Запит на отримання підтипів причин повернення.
 *
 * Метод: getReturnReasonsSubtypes
 * Модель: AdditionalServiceGeneral
 */
export interface ReasonsSubtypesRequest {
      /**
       * Ідентифікатор (REF) основної причини повернення.
       *
       * Обов’язковий параметр.
       *
       * Приклад: 00000000-0000-0000-0000-000000000000
       */
      ReasonRef: string
}