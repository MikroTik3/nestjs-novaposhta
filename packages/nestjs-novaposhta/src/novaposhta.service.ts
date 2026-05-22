import { Injectable } from "@nestjs/common";

import { AddressService } from "./modules/addresses/address.service";
import { TrackingService } from "./modules/tracking/tracking.service";
import { PaymentService } from "./modules/payment/payment.service";

@Injectable()
export class NovaposhtaService {
	public constructor(
		public addresses: AddressService,
		public tracking: TrackingService,
		public payment: PaymentService
	) {}
}