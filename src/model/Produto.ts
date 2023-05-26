import Categoria from './Categoria.ts'
import UsuarioLogin from './UsuarioLogin.ts'

interface Produto {
	id: number;
	nome: string;
	descricao: string;
	quantidade: number;
	preco: number;
	foto: string;
	categorias?: Categoria|null;
	usuario?: UsuarioLogin|null;
}

export default Produto
