export interface Task {
    set(): unknown;
    update(): unknown;
    id: number;
    task: string;
    status: string;
    checked: boolean;
}
