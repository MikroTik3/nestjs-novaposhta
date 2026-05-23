/**
 * Тип заявки на повернення / зміну відправлення.
 */
export enum DocumentEnum {
      /**
       * Звичайне повернення вантажу.
       */
      CargoReturn = 'orderCargoReturn',

      /**
       * Переадресація відправлення.
       */
      Redirecting = 'orderRedirecting',

      /**
       * Продовження терміну зберігання.
       */
      TermExtension = 'orderTermExtension',

      /**
       * Зміна післяплати / накладного платежу.
       */
      ChangeEW = 'orderChangeEW',
}