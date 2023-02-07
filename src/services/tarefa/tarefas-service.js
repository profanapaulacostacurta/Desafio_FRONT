import { TokenService, token } from '../login/token-service';
const HEADERS = process.env.DEFAULT_HEADERS;
const LOGIN = process.env.CREDENCIAL;

export const TarefasServices = async () => {
    return(TokenService()
    .then(await fetch('http://localhost:5000/cards', { headers: token })
        .then(res => {
            if (res.status === 200) return res.json();
            else if (res.status === 401) throw new Error(401);
            else throw new Error('Código de Status inesperado!');
        
        })  
        .catch(console.error)
    ));
};

export const AddTarefasServices = async (props) => {
    const dados = props.novatarefa;
    console.log(dados);
    return await TokenService().then(
    await fetch(`${URL}`, {
        headers: { token, HEADERS},
        method: 'POST',
        body: JSON.stringify(LOGIN)
    })
        .then(res => {
            if (res.status === 201) return res.json();
            else if (res.status === 401) TokenService();
            else throw new Error('Código de Status inesperado!');
            return TarefasServices(dados);
        })
        .catch(console.error)
    ).catch(console.error);
};
