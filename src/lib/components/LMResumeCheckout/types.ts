type LMResumeCheckoutProps = {
    lang: string;
    currency: string; 
    promoTitle?: string;
    taxes: number;
    total: number;
    promoLabel: string;
    taxesLabel: string;
    totalLabel: string;
    onPromo: (code: string) => void;
};

export type { LMResumeCheckoutProps };
