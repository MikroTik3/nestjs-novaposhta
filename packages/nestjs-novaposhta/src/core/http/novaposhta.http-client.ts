import {
	NOVAPOSHTA_API_URL,
} from '../config'
import { NovaposhtaError } from './novaposhta.error'
import { Inject, Injectable } from '@nestjs/common'
import { Dispatcher, request } from 'undici'

import { NovaposhtaOptionsSymbol, type NovaposhtaModuleOptions } from '../../common/interfaces'

@Injectable()
export class NovaposhtaHttpClient {
	public constructor(
		@Inject(NovaposhtaOptionsSymbol)
		private readonly config: NovaposhtaModuleOptions
	) {}

	public async request<T>(options: {
		method: Dispatcher.HttpMethod
		url: string
		data?: any
		params?: any
	}): Promise<T> {
	     const url = this.buildUrl(options.url, options.params)

		const response = await request(url, {
                     method: options.method,
                     headersTimeout: 15000,
                     bodyTimeout: 15000,
                     headers: {
                            'Content-Type': 'application/json',
                     },
                     body: JSON.stringify({
                            apiKey: this.config.apiKey,
                            ...options.data,
                     }),
		})

		if (response.statusCode >= 400) {
			const text = await response.body.text()
			throw new NovaposhtaError('novaposhta_error', text, text)
		}

		return (await response.body.json()) as T
	}

	public get<T>(url: string, params?: any) {
          return this.request<T>({ method: 'GET', url, params })
	}

	public post<T>(url: string, data?: any) {
          return this.request<T>({ method: 'POST', url, data })
	}

	public delete<T>(url: string, params?: any) {
		return this.request<T>({ method: 'DELETE', url, params })
	}

	private buildUrl(url: string, params?: any): string {
		let fullUrl = `${NOVAPOSHTA_API_URL}${url}`
 
		if (params && typeof params === 'object') {
			const qp = new URLSearchParams(params)
			fullUrl += `?${qp.toString()}`
		}

		return fullUrl
	}
}