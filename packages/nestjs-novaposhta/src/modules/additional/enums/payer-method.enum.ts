/**
 * Тип платника / сторони, яка здійснює оплату.
 */
export enum PayerMethodEnum {
    /**
     * Оплачує відправник.
     */
    Sender = 'Sender',

    /**
     * Оплачує отримувач.
     */
    Recipient = 'Recipient',

    /**
     * Оплата третьою особою.
     */
    ThirdPerson = 'ThirdPerson',
}