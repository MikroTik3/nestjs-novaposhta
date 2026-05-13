export interface NovaposhtaResponse<T> {
    success: boolean
    data: T[]
    errors: string[]
    warnings: string[]
    info: any[]
    messageCodes: any[]
    errorCodes: any[]
    warningCodes: any[]
    infoCodes: any[]
}

export interface PaginationParams {
    Page?: number
    Limit?: number
}

export interface SearchParams {
    FindByString?: string;
}

export interface LanguageParams {
    Language?: "ua" | "ru";
}