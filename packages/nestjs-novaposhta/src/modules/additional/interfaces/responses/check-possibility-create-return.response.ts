/**
 * Дані отримувача, доступні для створення повернення.
 */
export interface CheckPossibilityCreateReturnResponse {
      /**
       * Можливість використання безготівкового розрахунку.
       */
      NonCash?: boolean

      /**
       * Місто отримувача.
       */
      City?: string

      /**
       * Контрагент-отримувач.
       */
      Counterparty?: string

      /**
       * Контактна особа отримувача.
       */
      ContactPerson?: string

      /**
       * Адреса отримувача.
       */
      Address?: string

      /**
       * Номер телефону отримувача.
       */
      Phone?: string

      /**
       * Унікальний ідентифікатор блоку.
       */
      Ref?: string
}