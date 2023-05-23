import Categoria from './Categoria.ts'

interface Produto {
	id: number;
	nome: string;
	descricao: string;
	quantidade: number;
	preco: number;
	foto: string;
	categoria?: Categoria|null;
	usuario: Usuario;
}

export default Produto
