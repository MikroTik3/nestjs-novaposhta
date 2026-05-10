import type { QueryParams } from "../../../../common/types/query.types"

export interface WarehouseRequest extends QueryParams {
      CityName: string
      CityRef: string
      TypeOfWarehouseRef: string
      WarehouseId: string
}