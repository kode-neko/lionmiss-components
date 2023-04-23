import { LMColor, LMSize } from "lionmiss-core";

type LMFilterProps = {
    selectedListColor: LMColor[];
    onChangeListColor: (color: LMColor) => void;
    selectedListSize: LMSize[];
    onChangeListSize: (size: LMSize) => void;
    minPrice: number;
    maxPrice: number;
    valMinPrice: number;
    valMaxPrice: number;
    onChangeMinPrice: (min: number) => void;
    onChangeMaxPrice: (max: number) => void;
    listStyle: string[];
    selectedListStyle: string[];
    onChangeListStyle: (vale: string) => void;
};

export type { LMFilterProps };
