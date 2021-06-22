export const HITLIST_TYPES: HitListType[] = [
    {
        id: 1,
        title: 'Top 40',
        size: 40,
    },
    {
        id: 2,
        title: 'Album Top 40',
        size: 40,
    },
    {
        id: 3,
        title: 'Tipparade',
        size: 30,
    },
    {
        id: 4,
        title: 'Movie Top 40',
        size: 40,
    },
];

export interface HitListType {
    id: number;
    title: string;
    size: number;
}
