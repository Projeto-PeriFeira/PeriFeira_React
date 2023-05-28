import { Produto } from "./Produto";

export interface Usuario { 
  id: number;
  nome: string;
  usuarios: string;
  foto: string;
  senha: string;
  produtos?: Produto[] | null
}
