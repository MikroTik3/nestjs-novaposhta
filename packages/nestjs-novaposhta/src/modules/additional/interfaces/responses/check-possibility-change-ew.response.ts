export interface CheckPossibilityChangeEWResponse {
      CanChangeSender: boolean;
      CanChangeRecipient: boolean;
      CanChangePayerTypeOrPaymentMethod: boolean;
      CanChangeBackwardDeliveryDocuments: boolean;
      CanChangeBackwardDeliveryMoney: boolean;
      CanChangeCash2Card: boolean;
      CanChangeBackwardDeliveryOther: boolean;
      CanChangeAfterpaymentType: boolean;
      CanChangeLiftingOnFloor: boolean;
      CanChangeLiftingOnFloorWithElevator: boolean;
      CanChangeFillingWarranty: boolean;

      SenderCounterparty: string;
      ContactPersonSender: string;
      SenderPhone: string;

      RecipientCounterparty: string;
      ContactPersonRecipient: string;
      RecipientPhone: string;

      PayerType: string;
      PaymentMethod: string;
}