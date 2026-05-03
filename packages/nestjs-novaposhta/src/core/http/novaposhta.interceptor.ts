import { AxiosInstance, AxiosRequestConfig } from 'axios'

export function attachNovaposhtaInterceptors(
	http: AxiosInstance,
	apiKey: string
) {
	http.interceptors.request.use(config => {
		console.log(
			`[Novaposhta Request] → ${config.method?.toUpperCase()} ${config.url}`
		)

		if (config.data) {
			config.data = {
				apiKey,
				...config.data,
			}
		} else {
			config.data = { apiKey }
		}

		return config
	})

	http.interceptors.response.use(
		res => res,
		async error => {
			const config: AxiosRequestConfig & { __retryCount?: number } =
				error.config

			if (!config) {
				return Promise.reject(error)
			}

			const status = error?.response?.status

			console.error(
				`[Novaposhta Error] ${status} → ${config.url}`
			)

			if (status >= 500) {
				config.__retryCount = config.__retryCount || 0

				if (config.__retryCount < 3) {
					config.__retryCount++

					console.log(
						`[Novaposhta Retry] Attempt ${config.__retryCount}`
					)

					return http.request(config)
				}
			}

			return Promise.reject(error)
		}
	)
}