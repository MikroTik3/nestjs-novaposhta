import type { QueryParams } from "../../../../common/types/query.types"

export interface WarehouseRequest extends QueryParams {
      /**
       * Назва міста (наприклад: "Kyiv")
       */
      CityName: string

      /**
       * Унікальний ідентифікатор міста в системі Nova Poshta
       */
      CityRef: string

      /**
       * Ref типу відділення (наприклад: поштомат, вантажне відділення тощо)
       */
      TypeOfWarehouseRef: string

      /**
       * ID конкретного відділення (якщо потрібно отримати конкретне відділення)
       */
      WarehouseId: string

      /**
       * Фільтр: наявність велосипедної парковки
       * 1 — є, 0 — немає / не враховувати
       */
      BicycleParking?: number

      /**
       * Фільтр: наявність PostFinance
       * 1 — доступно, 0 — немає / не враховувати
       */
      PostFinance?: number
}