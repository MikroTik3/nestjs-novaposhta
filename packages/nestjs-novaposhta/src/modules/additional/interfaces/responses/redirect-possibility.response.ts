/**
 * Дані для можливості створення переадресації відправлення.
 */
export interface RedirectPossibility {
      /**
       * Ідентифікатор документа (REF).
       */
      Ref: string

      /**
       * Номер документа.
       */
      Number: string

      /**
       * Тип платника.
       */
      PayerType: string

      /**
       * Форма розрахунку (Cash / NonCash).
       */
      PaymentMethod: string

      /**
       * Ідентифікатор відділення.
       */
      WarehouseRef: string

      /**
       * Опис відділення.
       */
      WarehouseDescription: string

      /**
       * Адреса (текстовий опис, якщо переадресація на адресу).
       */
      AddressDescription: string

      /**
       * Опис вулиці (якщо переадресація на адресу).
       */
      StreetDescription: string

      /**
       * Номер будинку (якщо переадресація на адресу).
       */
      BuildingNumber: string

      /**
       * Ідентифікатор міста отримувача.
       */
      CityRecipient: string

      /**
       * Назва міста отримувача.
       */
      CityRecipientDescription: string

      /**
       * Ідентифікатор населеного пункту отримувача.
       */
      SettlementRecipient: string

      /**
       * Назва населеного пункту отримувача.
       */
      SettlementRecipientDescription: string

      /**
       * Ідентифікатор типу населеного пункту.
       */
      SettlementType: string

      /**
       * Ідентифікатор контрагента отримувача.
       */
      CounterpartyRecipientRef: string

      /**
       * Назва інтернет-контрагента отримувача.
       */
      CounterpartyRecipientDescription: string

      /**
       * ПІБ контактної особи отримувача.
       */
      RecipientName: string

      /**
       * Телефон відправника.
       */
      PhoneSender: string

      /**
       * Телефон отримувача.
       */
      PhoneRecipient: string

      /**
       * Загальна вага документа.
       */
      DocumentWeight: string
}