import { Categoria } from './Categoria.ts'
import { Usuario } from './Usuario.ts'

export interface Produto {
	id: number;
	nome: string;
	descricao: string;
	quantidade: number;
	preco: number;
	foto: string;
	categorias?: Categoria|null;
	usuarios?: Usuario|null;
}
