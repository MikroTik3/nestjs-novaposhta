export interface RedirectionOrdersListResponse {
      OrderRef: string;
      OrderNumber: string;
      DateTime: string;
      DocumentNumber: string;
      Note: string;

      CityRecipient: string;
      RecipientAddress: string;
      CounterpartyRecipient: string;
      RecipientName: string;
      PhoneRecipient: string;

      PayerType: string;
      DeliveryCost: string;
      EstimatedDeliveryDate: string;

      ExpressWaybillNumber: string;
      ExpressWaybillStatus: string;
}