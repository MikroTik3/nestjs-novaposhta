/**
 * Запит на перевірку можливості створення переадресації відправлення.
 *
 * Метод: checkPossibilityForRedirecting
 * Модель: AdditionalServiceGeneral
 */
export interface CheckPossibilityForRedirectingRequest {
  /**
   * Номер експрес-накладної (ТТН / документ).
   *
   * Обов’язковий параметр.
   */
  Number: string
}