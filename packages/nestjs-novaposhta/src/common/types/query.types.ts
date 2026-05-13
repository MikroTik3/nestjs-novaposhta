import type { LanguageParams, PaginationParams, SearchParams } from "../interfaces";

export type QueryParams = PaginationParams 
      & SearchParams 
      & LanguageParams;