import { Produto } from './Produto.ts'

export interface Categoria {
	id: number;
	descricao: string;
	produtos: Produto|null;
}
