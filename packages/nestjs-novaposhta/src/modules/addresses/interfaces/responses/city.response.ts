 /**
 * Тіло відповіді API Nova Poshta (міста)
 */
export interface CityResponse {
  /**
   * Місто українською мовою (до 50 символів)
   */
  Description: string;

  /**
   * Місто російською мовою (до 50 символів)
   */
  DescriptionRu: string;

  /**
   * Ідентифікатор міста (Ref, 36 символів)
   */
  Ref: string;

  /**
   * Наявність доставки по днях тижня (1–7)
   * Значення повертається як рядок ("1" / "0")
   */
  Delivery1: string;
  Delivery2: string;
  Delivery3: string;
  Delivery4: string;
  Delivery5: string;
  Delivery6: string;
  Delivery7: string;

  /**
   * Область (Ref)
   */
  Area: string;

  /**
   * Ідентифікатор типу населеного пункту (Ref)
   */
  SettlementType: string;

  /**
   * 1 — філіал «Нова пошта», 0 — партнер
   */
  IsBranch: string;

  /**
   * 1 — заборонити введення нових вулиць користувачем, 0 — дозволено
   */
  PreventEntryNewStreetsUser: string;

  /**
   * Конгломерат
   */
  Conglomerates: string;

  /**
   * Код міста
   */
  CityID: string;

  /**
   * Опис типу населеного пункту російською мовою
   */
  SettlementTypeDescriptionRu: string;

  /**
   * Опис типу населеного пункту українською мовою
   */
  SettlementTypeDescription: string;
}