/**
 * Элемент банковской карты/кошелька, привязанного к Nova Poshta Payment API.
 *
 * Используется в методе:
 * `Payment.walletManagement`
 *
 * Возвращается как часть массива `data` в ответе API.
 */
export interface WalletManagmentResponse {
	/**
	 * Уникальный идентификатор карты/записи в системе Nova Poshta
	 */
	Ref?: string

	/**
	 * Маскированный номер карты
	 * Пример: 5168********1234
	 */
	CardMask?: string

	/**
	 * Тип карты (Visa, MasterCard и т.д.)
	 */
	CardType?: string

	/**
	 * Флаг, является ли карта основной (по умолчанию для списаний)
	 */
	IsDefault?: boolean

	/**
	 * Месяц окончания срока действия карты
	 * Формат: "01" - "12"
	 */
	ExpireMonth?: string

	/**
	 * Год окончания срока действия карты
	 * Формат: "YYYY"
	 */
	ExpireYear?: string

	/**
	 * Статус карты в системе Nova Poshta
	 * Пример: Active, Blocked, Deleted
	 */
	Status?: string

	/**
	 * Токен карты (если возвращается API)
	 * Используется для внутренних операций оплаты
	 */
	Token?: string
}