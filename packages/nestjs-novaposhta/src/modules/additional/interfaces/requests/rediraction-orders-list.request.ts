import type { PaginationParams } from "../../../../common/interfaces";

export interface RedirectionOrdersListRequest extends PaginationParams {
  /**
   * Номер заявки на переадресацію
   */
  Number?: string;

  /**
   * Ref заявки на переадресацію
   */
  Ref?: string;

  /**
   * Дата "з" (дд.мм.рррр)
   */
  BeginDate?: string;

  /**
   * Дата "до" (дд.мм.рррр)
   */
  EndDate?: string;
}