export interface Book {
    id: number;
    title: string;
    description: string;
}

export const books: Book[] = [
    { id: 1, title: 'Book 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', description: 'Description 2' },
    { id: 3, title: 'Book 3', description: 'Description 3' },
];