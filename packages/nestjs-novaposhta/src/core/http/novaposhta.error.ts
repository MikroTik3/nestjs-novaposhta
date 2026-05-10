export class NovaposhtaError extends Error {
	public constructor(
		public readonly code: string,
		public readonly description: string,
		public readonly data?: unknown
	) {
		super(description)

		this.name = NovaposhtaError.name

		Object.setPrototypeOf(this, NovaposhtaError.prototype)
	}
}