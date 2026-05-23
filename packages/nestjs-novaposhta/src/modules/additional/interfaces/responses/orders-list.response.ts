/**
 * Елемент списку заявок на повернення.
 */
export interface OrdersListResponse {
      /**
       * Ідентифікатор (REF) заявки на повернення.
       */
      OrderRef: string

      /**
       * Номер заявки на повернення.
       */
      OrderNumber: string

      /**
       * Статус заявки.
       */
      OrderStatus: string

      /**
       * Номер документа, на основі якого створено заявку.
       */
      DocumentNumber: string

      /**
       * Контрагент, що буде отримувачем в експрес-накладній (ЕН) повернення.
       */
      CounterpartyRecipient: string

      /**
       * Контактна особа, що буде отримувачем в експрес-накладній (ЕН) повернення.
       */
      ContactPersonRecipient: string

      /**
       * Адреса, на яку буде оформлено експрес-накладну (ЕН) повернення.
       */
      AddressRecipient: string

      /**
       * Вартість експрес-накладної (ЕН) повернення (якщо створено ЕН).
       */
      DeliveryCost: string

      /**
       * Розрахункова дата доставки повернення (якщо створено ЕН).
       */
      EstimatedDeliveryDate: string

      /**
       * Номер експрес-накладної (ЕН) повернення (якщо створено ЕН).
       */
      ExpressWaybillNumber: string

      /**
       * Статус експрес-накладної (ЕН) повернення (якщо створено ЕН).
       */
      ExpressWaybillStatus: string
}