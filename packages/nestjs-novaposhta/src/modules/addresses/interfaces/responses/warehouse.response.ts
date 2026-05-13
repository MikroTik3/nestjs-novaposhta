/**
 * Обмеження розмірів посилки
 */
export interface WarehouseDimensions {
      /**
       * Ширина (мм/см залежно від API)
       */
      Width: string

      /**
       * Висота (мм/см залежно від API)
       */
      Height: string

      /**
       * Довжина (мм/см залежно від API)
       */
      Length: string
}

/**
 * Розклад роботи відділення
 */
export interface WarehouseSchedule {
      /**
       * Понеділок
       */
      Monday: string

      /**
       * Вівторок
       */
      Tuesday: string

      /**
       * Середа
       */
      Wednesday: string

      /**
       * Четвер
       */
      Thursday: string

      /**
       * П’ятниця
       */
      Friday: string

      /**
       * Субота
       */
      Saturday: string

      /**
       * Неділя
       */
      Sunday: string
}

/**
 * Тіло відповіді API Nova Poshta (відділення)
 */
export interface WarehouseResponse {
      /**
       * Унікальний ключ відділення
       */
      SiteKey: string

      /**
       * Повна назва відділення (укр)
       */
      Description: string

      /**
       * Повна назва відділення (рос)
       */
      DescriptionRu: string

      /**
       * Коротка адреса (укр)
       */
      ShortAddress: string

      /**
       * Коротка адреса (рос)
       */
      ShortAddressRu: string

      /**
       * Контактний телефон відділення
       */
      Phone: string

      /**
       * Ref типу відділення (поштомат, відділення тощо)
       */
      TypeOfWarehouse: string

      /**
       * Унікальний Ref відділення
       */
      Ref: string

      /**
       * Номер відділення
       */
      Number: string

      /**
       * Ref міста
       */
      CityRef: string

      /**
       * Опис міста (укр)
       */
      CityDescription: string

      /**
       * Опис міста (рос)
       */
      CityDescriptionRu: string

      /**
       * Ref населеного пункту
       */
      SettlementRef: string

      /**
       * Назва населеного пункту
       */
      SettlementDescription: string

      /**
       * Область / регіон
       */
      SettlementAreaDescription: string

      /**
       * Район населеного пункту
       */
      SettlementRegionsDescription: string

      /**
       * Тип населеного пункту (укр)
       */
      SettlementTypeDescription: string

      /**
       * Тип населеного пункту (рос)
       */
      SettlementTypeDescriptionRu: string

      /**
       * Довгота (longitude)
       */
      Longitude: string

      /**
       * Широта (latitude)
       */
      Latitude: string

      /**
       * Доступність PostFinance (1/0)
       */
      PostFinance: string

      /**
       * Наявність велопарковки (1/0)
       */
      BicycleParking: string

      /**
       * Доступ до оплати (1/0)
       */
      PaymentAccess: string

      /**
       * Наявність POS-терміналу (1/0)
       */
      POSTerminal: string

      /**
       * Міжнародна доставка (1/0)
       */
      InternationalShipping: string

      /**
       * Кількість робочих місць самообслуговування
       */
      SelfServiceWorkplacesCount: string

      /**
       * Максимальна дозволена вага (загальна)
       */
      TotalMaxWeightAllowed: string

      /**
       * Максимальна вага одного місця
       */
      PlaceMaxWeightAllowed: string

      /**
       * Обмеження розмірів відправлення (відправка)
       */
      SendingLimitationsOnDimensions: WarehouseDimensions

      /**
       * Обмеження розмірів відправлення (отримання)
       */
      ReceivingLimitationsOnDimensions: WarehouseDimensions

      /**
       * Графік прийому
       */
      Reception: WarehouseSchedule

      /**
       * Графік видачі
       */
      Delivery: WarehouseSchedule

      /**
       * Загальний графік роботи
       */
      Schedule: WarehouseSchedule

      /**
       * Код району
       */
      DistrictCode: string

      /**
       * Статус відділення (Working, Closed тощо)
       */
      WarehouseStatus: string

      /**
       * Дата зміни статусу відділення
       */
      WarehouseStatusDate: string

      /**
       * Категорія відділення (Branch, Postomat тощо)
       */
      CategoryOfWarehouse: string

      /**
       * Місто / регіон (верхній рівень)
       */
      RegionCity: string

      /**
       * Чи доступне для агентів (1/0)
       */
      WarehouseForAgent: string

      /**
       * Максимальна оголошена вартість
       */
      MaxDeclaredCost: string

      /**
       * Заборона вибору відділення (1/0)
       */
      DenyToSelect: string

      /**
       * Тип поштомату (якщо є)
       */
      PostMachineType: string

      /**
       * Поштовий індекс (UA)
       */
      PostalCodeUA: string

      /**
       * Тільки отримання посилок (без відправки)
       */
      OnlyReceivingParcel: string

      /**
       * Внутрішній індекс відділення
       */
      WarehouseIndex: string
}