import type { FactoryProvider, ModuleMetadata } from "@nestjs/common";

export const NovaposhtaOptionsSymbol = Symbol();

/**
 * Тип, що представляє параметри для налаштування Novaposhta.
 */
export type NovaposhtaModuleOptions = {
    /**
     * Ключ API для автентифікації в Novaposhta.
     */
    apiKey: string; // Токен доступу або тестовий токен з особистого кабінету Novaposhta
};

/**
 * Тип для асинхронного налаштування Novaposhta.
 */
export type NovaposhtaModuleAsyncOptions = Pick<ModuleMetadata, "imports"> & Pick<FactoryProvider<NovaposhtaModuleOptions>, "useFactory" | "inject">;