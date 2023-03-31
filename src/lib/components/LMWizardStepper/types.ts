type LMStepperOptionProps = {
    key: React.Key;
    name: string;
};

type LMStepperProps = {
    options: LMStepperOptionProps[];
    active?: React.Key;
    onClick?: (key: React.Key) => void
};

export type { LMStepperProps };
