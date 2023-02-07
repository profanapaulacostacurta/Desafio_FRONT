const URL_LOGIN = 'http://localhost:5000/login';
const HEADERS = (process.env.DEFAULT_HEADERS);
const LOGIN = (process.env.CREDENCIAL);


export async function LoginService(){
return (await fetch('http://localhost:5000/login', {
  method: 'POST',
  mode: 'cors',
  headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({'login': 'letscode', 'senha': 'lets@123'}), 
  }).then((resposta) => resposta.json())
  .then(token => 'Bearer ${token}')
  .then(token => ({ Authorization: token }))
  .catch(console.error)
)
};