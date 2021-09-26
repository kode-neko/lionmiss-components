type LMFilterPriceProps = {
    min: number;
    max: number;
    valMin: number;
    valMax: number;
    onChangeMin: (min: number) => void;
    onChangeMax: (max: number) => void
};

export { LMFilterPriceProps };
