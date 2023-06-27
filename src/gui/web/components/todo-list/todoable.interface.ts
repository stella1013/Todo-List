export interface Todoable{
    id: string;
    title: string;
    completed: boolean;
    parentId: string;
    dateAdded: string;
    dateModified: string;
    dateCompleted: string;
}