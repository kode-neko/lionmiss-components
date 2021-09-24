type LMResumeCartProps = {
    promoTitle?: string;
    onPromo: (code: string) => void;
    taxes: number;
    total: number;
    lang: string;
    currency: string; 
};

export { LMResumeCartProps };
