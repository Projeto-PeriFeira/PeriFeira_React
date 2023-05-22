interface UsuarioLogin {
    id: number;
    usuario: string; 
    senha: string;
    foto: string|null; 
    token?: string|null; 
}

export default UsuarioLogin;