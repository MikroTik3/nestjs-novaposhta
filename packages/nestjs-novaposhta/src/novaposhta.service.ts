import { Injectable } from "@nestjs/common";
import { AddressService } from "./modules/addresses/address.service";

@Injectable()
export class NovaposhtaService {
	public constructor(
		public addresses: AddressService,
	) {}
}