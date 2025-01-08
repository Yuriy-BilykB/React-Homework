export interface IUser {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}
export interface IArray {
	todos: IUser[];
}