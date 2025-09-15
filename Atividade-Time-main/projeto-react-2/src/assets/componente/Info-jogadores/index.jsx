
import { useState } from 'react';
import './styles.css';
import logo from '../logo/logo.png';


function InfoJogadores() {
    const [jogadores, setJogadores] = useState('');
    const [camisa, setCamisa] = useState('');     

    const [listaJogadores, setListaJogadores] = useState([]);

    function adicionarJogador(event) {
        event.preventDefault();
        setListaJogadores([...listaJogadores, { nome: jogadores, numero: camisa }]);
        setJogadores('');
        setCamisa('');
    }
    
    return (
        <div className="info-jogadores">
            <img src={logo} alt="logo" className="logo" />
            <h2>Adicionar Jogadores</h2>
            <form onSubmit={adicionarJogador}>
                <div>
                    <label>Nome do Jogador:</label>
                    <input type="text"
                        value={jogadores}
                        onChange={(e) => setJogadores(e.target.value)}
                        required />
                </div>
                <div>
                    <label>Número da Camisa:</label>
                    <input type="number"
                        value={camisa}
                        onChange={(e) => setCamisa(e.target.value)}
                        required />
                </div>
                <button type="submit">Adicionar</button>
            </form>
            <ul>
                {listaJogadores.map((jogador, index) => (
                    <li key={index}>
                        {jogador.nome} - Camisa {jogador.numero}
                    </li>
                ))}
            </ul>
        </div>
    );
}




export default InfoJogadores;    
