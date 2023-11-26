export type Review = {
    id: number,
    user: {
        id: number,
        name: string,
        avatar: string,
        isPro: boolean
    },
    rating: number,
    text: string,
    date: string,
};