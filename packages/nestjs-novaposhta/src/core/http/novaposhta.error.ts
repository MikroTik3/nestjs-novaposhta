export class NovaposhtaError extends Error {
	public constructor(
		public code: string,
		public description: string,
		public data?: any
	) {
		super(description)
		this.name = "NovaposhtaError"
	}
}