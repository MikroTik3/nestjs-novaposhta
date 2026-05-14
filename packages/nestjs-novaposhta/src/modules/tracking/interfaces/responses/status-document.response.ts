/**
 * Відповідь зі статусом відправлення.
 */
export interface StatusDocumentResponse {

    /**
     * Доступність створення повернення вантажу.
     */
    PossibilityCreateReturn: boolean;

    /**
     * Доступність створення відмови від вантажу.
     */
    PossibilityCreateRefusal: boolean;

    /**
     * Доступність редагування експрес-накладної.
     */
    PossibilityChangeEW: boolean;

    /**
     * Доступність переадресації.
     */
    PossibilityCreateRedirecting: boolean;

    /**
     * Номер експрес-накладної.
     */
    Number: string;

    /**
     * Наявність зворотної доставки.
     */
    Redelivery: string;

    /**
     * Сума зворотної доставки.
     */
    RedeliverySum: string;

    /**
     * Номер зворотної доставки.
     */
    RedeliveryNum: string;

    /**
     * Платник зворотної доставки.
     */
    RedeliveryPayer: string;

    /**
     * Тип документа-основи.
     */
    OwnerDocumentType: string;

    /**
     * Останній тип документа-основи.
     */
    LastCreatedOnTheBasisDocumentType: string;

    /**
     * Останній тип платника документа-основи.
     */
    LastCreatedOnTheBasisPayerType: string;

    /**
     * Дата останньої зміни документа-основи.
     */
    LastCreatedOnTheBasisDateTime: string;

    /**
     * Останній статус грошового переказу.
     */
    LastTransactionStatusGM: string;

    /**
     * Дата останньої транзакції грошового переказу.
     */
    LastTransactionDateTimeGM: string;

    /**
     * Сума грошового переказу.
     */
    LastAmountTransferGM: string;

    /**
     * Дата створення накладної.
     */
    DateCreated: string;

    /**
     * Вага документа.
     */
    DocumentWeight: string;

    /**
     * Фактична вага.
     */
    FactualWeight: string;

    /**
     * Об’ємна вага.
     */
    VolumeWeight: string;

    /**
     * Контрольне зважування.
     */
    CheckWeight: string;

    /**
     * Метод контрольного зважування.
     */
    CheckWeightMethod: string;

    /**
     * Вартість доставки.
     */
    DocumentCost: string;

    /**
     * Розрахункова вага.
     */
    CalculatedWeight: string;

    /**
     * Дані до контрольного зважування.
     */
    SumBeforeCheckWeight: string;

    /**
     * Тип платника.
     */
    PayerType: string;

    /**
     * ПІБ отримувача.
     */
    RecipientFullName: string;

    /**
     * Дата отримання вантажу.
     */
    RecipientDateTime: string;

    /**
     * Планова дата доставки.
     */
    ScheduledDeliveryDate: string;

    /**
     * Метод оплати.
     */
    PaymentMethod: string;

    /**
     * Опис вантажу.
     */
    CargoDescriptionString: string;

    /**
     * Тип вантажу.
     */
    CargoType: string;

    /**
     * Місто відправника.
     */
    CitySender: string;

    /**
     * Місто отримувача.
     */
    CityRecipient: string;

    /**
     * Відділення отримувача.
     */
    WarehouseRecipient: string;

    /**
     * Тип контрагента.
     */
    CounterpartyType: string;

    /**
     * Контроль оплати.
     */
    AfterpaymentOnGoodsCost: string;

    /**
     * Тип доставки.
     */
    ServiceType: string;

    /**
     * Опис причини нерозвезення.
     */
    UndeliveryReasonsSubtypeDescription: string;

    /**
     * Номер відділення отримувача.
     */
    WarehouseRecipientNumber: string;

    /**
     * Номер документа-основи.
     */
    LastCreatedOnTheBasisNumber: string;

    /**
     * Телефон отримувача.
     */
    PhoneRecipient: string;

    /**
     * ПІБ отримувача з ЕН.
     */
    RecipientFullNameEW: string;

    /**
     * REF відділення отримувача.
     */
    WarehouseRecipientInternetAddressRef: string;

    /**
     * Токен маркетплейсу.
     */
    MarketplacePartnerToken: string;

    /**
     * Внутрішній номер замовлення.
     */
    ClientBarcode: string;

    /**
     * Адреса отримувача.
     */
    RecipientAddress: string;

    /**
     * Опис контрагента отримувача.
     */
    CounterpartyRecipientDescription: string;

    /**
     * Тип контрагента відправника.
     */
    CounterpartySenderType: string;

    /**
     * Дата сканування.
     */
    DateScan: string;

    /**
     * Статус оплати.
     */
    PaymentStatus: string;

    /**
     * Дата оплати.
     */
    PaymentStatusDate: string;

    /**
     * Сума до оплати.
     */
    AmountToPay: string;

    /**
     * Сплачена сума.
     */
    AmountPaid: string;

    /**
     * Поточний статус відправлення.
     */
    Status: string;

    /**
     * Код статусу.
     */
    StatusCode: string;

    /**
     * REF накладної.
     */
    RefEW: string;

    /**
     * Дії нестандартної зворотної доставки.
     */
    BackwardDeliverySubTypesActions: string;

    /**
     * Сервіси нестандартної зворотної доставки.
     */
    BackwardDeliverySubTypesServices: string;

    /**
     * Причина нерозвезення.
     */
    UndeliveryReasons: string;

    /**
     * Дата початку платного зберігання.
     */
    DatePayedKeeping: string;

    /**
     * Тип міжнародної доставки.
     */
    InternationalDeliveryType: string;

    /**
     * Кількість місць.
     */
    SeatsAmount: string;

    /**
     * Замаскований номер картки.
     */
    CardMaskedNumber: string;

    /**
     * Статус оплати ЕН.
     */
    ExpressWaybillPaymentStatus: string;

    /**
     * Сума до оплати ЕН.
     */
    ExpressWaybillAmountToPay: string;

    /**
     * Телефон відправника.
     */
    PhoneSender: string;

    /**
     * Дата оновлення трекінгу.
     */
    TrackingUpdateDate: string;

    /**
     * Відділення відправника.
     */
    WarehouseSender: string;

    /**
     * Дата повернення вантажу.
     */
    DateReturnCargo: string;

    /**
     * Дата переміщення.
     */
    DateMoving: string;

    /**
     * Перший день зберігання.
     */
    DateFirstDayStorage: string;

    /**
     * REF міста отримувача.
     */
    RefCityRecipient: string;

    /**
     * REF міста відправника.
     */
    RefCitySender: string;

    /**
     * REF населеного пункту отримувача.
     */
    RefSettlementRecipient: string;

    /**
     * REF населеного пункту відправника.
     */
    RefSettlementSender: string;

    /**
     * Адреса відправника.
     */
    SenderAddress: string;

    /**
     * ПІБ відправника.
     */
    SenderFullNameEW: string;

    /**
     * Оголошена вартість.
     */
    AnnouncedPrice: string;

    /**
     * Додаткова інформація.
     */
    AdditionalInformationEW: string;

    /**
     * Фактична дата доставки.
     */
    ActualDeliveryDate: string;

    /**
     * Номер бронювання комірки поштомата.
     */
    PostomatV3CellReservationNumber: string;

    /**
     * Номер документа-основи.
     */
    OwnerDocumentNumber: string;

    /**
     * Комісія грошового переказу.
     */
    LastAmountReceivedCommissionGM: string;

    /**
     * Інтервал доставки.
     */
    DeliveryTimeframe: string;

    /**
     * Створено на основі.
     */
    CreatedOnTheBasis: string;

    /**
     * Дата причини нерозвезення.
     */
    UndeliveryReasonsDate: string;

    /**
     * REF типу відділення отримувача.
     */
    RecipientWarehouseTypeRef: string;

    /**
     * REF відділення отримувача.
     */
    WarehouseRecipientRef: string;

    /**
     * Категорія відділення.
     */
    CategoryOfWarehouse: string;

    /**
     * Адреса відділення отримувача.
     */
    WarehouseRecipientAddress: string;

    /**
     * Internet REF відділення відправника.
     */
    WarehouseSenderInternetAddressRef: string;

    /**
     * Адреса відділення відправника.
     */
    WarehouseSenderAddress: string;

    /**
     * Ознака авіадоставки.
     */
    AviaDelivery: string;

    /**
     * Штрихкод RedBox.
     */
    BarcodeRedBox: string;

    /**
     * Ознака відмови від повернення.
     */
    CargoReturnRefusal: string;

    /**
     * Дні зберігання.
     */
    DaysStorageCargo: string;

    /**
     * Пакування.
     */
    Packaging: unknown[] | null;

    /**
     * Часткове повернення товару.
     */
    PartialReturnGoods: unknown[] | null;

    /**
     * Ознака безпечної покупки.
     */
    SecurePayment: string;

    /**
     * Можливість зміни виплати на картку.
     */
    PossibilityChangeCash2Card: boolean;

    /**
     * Можливість зміни інтервалу доставки.
     */
    PossibilityChangeDeliveryIntervals: boolean;

    /**
     * Можливість продовження зберігання.
     */
    PossibilityTermExtensio: boolean;

    /**
     * Кількість днів зберігання.
     */
    StorageAmount: string;

    /**
     * Вартість зберігання.
     */
    StoragePrice: string;

    /**
     * Ознака безкоштовної доставки.
     */
    FreeShipping: string;

    /**
     * Картка лояльності отримувача.
     */
    LoyaltyCardRecipient: string;
}