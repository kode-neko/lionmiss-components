type LMCreditCardValues = {
  creditNumber: string;
  fullName: string;
  month: string;
  year: string;
  cvv: string;
};

type LMCreditCardFormProps = {
  values: LMCreditCardValues;
  placeholder: LMCreditCardValues;
  onChange: (creditCard: LMCreditCardValues) => void;
};

export type { LMCreditCardValues, LMCreditCardFormProps };
