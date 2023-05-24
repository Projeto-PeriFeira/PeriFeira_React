import Produto from './Produto.ts'

interface Categoria {
	id: number;
	descricao: string;
	produtos?: Produto|null;
}

export default Categoria
