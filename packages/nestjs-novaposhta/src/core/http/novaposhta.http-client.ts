import {
	NOVAPOSHTA_API_URL,
} from '../config'
import { NovaposhtaError } from './novaposhta.error'
import { Inject, Injectable} from '@nestjs/common'
import { request } from 'undici'

import {NovaposhtaOptionsSymbol, type NovaposhtaModuleOptions, type NovaposhtaResponse} from '../../common/interfaces'

@Injectable()
export class NovaposhtaHttpClient {
	public constructor(
		@Inject(NovaposhtaOptionsSymbol)
		private readonly config: NovaposhtaModuleOptions
	) {}

	public async request<T>(modelName: string, calledMethod: string, methodProperties: Record<string, any> = {}): Promise<T[]> {
		const response = await request(NOVAPOSHTA_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			headersTimeout: 15000,
			bodyTimeout: 15000,
			body: JSON.stringify({
				apiKey: this.config.apiKey,
				modelName,
				calledMethod,
				methodProperties,
			}),
		})

		if (response.statusCode >= 400) {
			const text = await response.body.text()

			throw new NovaposhtaError('novaposhta_http_error',
				text,
				text
			)
		}

		const data = (await response.body.json()) as NovaposhtaResponse<T>

		if (!data.success) {
			throw new NovaposhtaError('novaposhta_api_error',
				data.errors?.join(', ') || 'Nova Poshta API Error',
				data.errors
			)
		}

		return data.data
	}
}