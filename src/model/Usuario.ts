import { Produto } from "./Produto";

export interface Usuario { 
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  produtos?: Produto[] | null
}
