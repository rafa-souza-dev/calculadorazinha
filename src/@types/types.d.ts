export type variant =
    | 'black'
    | 'brass'
    | 'orange'
    | 'silver'

type buttonType =
    | 'drawable'
    | 'operator'
    | 'others'

export type ButtonCalculator = {
    id: number;
    slug: string;
    variant: variant;
    type: buttonType; 
}
