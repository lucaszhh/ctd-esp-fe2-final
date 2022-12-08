export interface INewsNormalizadas {
    id: number;
    title: string;
    description: string;
    date: number | string;
    isPremium: boolean;
    image: string;
    shortdescription?: string;
}

export interface INews {
    id: number;
    title: string;
    description: string;
    date: Date;
    isPremium: boolean;
    image: string;
}