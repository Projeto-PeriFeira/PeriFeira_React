import Categoria from './Categoria.ts'
import Usuario from './Usuario.ts'

interface Produto {
	id: number;
	nome: string;
	descricao: string;
	quantidade: number;
	preco: number;
	foto: string;
	categoria?: Categoria|null;
			// Arrumar
	usuario: Usuario;
}

export default Produto
