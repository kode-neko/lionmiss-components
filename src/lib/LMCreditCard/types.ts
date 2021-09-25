type LMCreditCardProps = {
    creditNumber: number;
    fullName: string;
    month: number;
    year: number;
    cvv: number;

    onChangeCreditNumber: (val: number) => void;
    onChangeFullName: (val: string) => void;
    onChangeMonth: (val: number) => void;
    onChangeYear: (val: number) => void;
    onChangeCvv: (val: number) => void;
};

export { LMCreditCardProps };
