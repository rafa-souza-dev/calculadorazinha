import { variant } from "./@types/types";

interface ButtonCalculator {
    id: number;
    slug: string;
    variant: variant;
    handleFunction: () => void
}

export const buttonsArray: ButtonCalculator[] = [
    {
        id: 1,
        slug: "mc",
        variant: "silver",
        handleFunction: () => {}                
    },
    {
        id: 2,
        slug: "m+",
        variant: "silver",
        handleFunction: () => {}                
    },
    {
        id: 3,
        slug: "m-",
        variant: "silver",
        handleFunction: () => {}                
    },
    {
        id: 4,
        slug: "mr",
        variant: "silver",
        handleFunction: () => {}                
    },
    {
        id: 5,
        slug: "0",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 6,
        slug: "+/-",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 7,
        slug: "/",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 8,
        slug: "x",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 9,
        slug: "7",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 10,
        slug: "8",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 11,
        slug: "9",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 12,
        slug: "-",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 13,
        slug: "4",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 14,
        slug: "5",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 15,
        slug: "6",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 16,
        slug: "+",
        variant: "brass",
        handleFunction: () => {}                
    },
    {
        id: 17,
        slug: "1",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 18,
        slug: "2",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 19,
        slug: "3",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 20,
        slug: "=",
        variant: "orange",
        handleFunction: () => {}                
    },
    {
        id: 21,
        slug: "0",
        variant: "black",
        handleFunction: () => {}                
    },
    {
        id: 22,
        slug: ",",
        variant: "black",
        handleFunction: () => {}                
    },
]
