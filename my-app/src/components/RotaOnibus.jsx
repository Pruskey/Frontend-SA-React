import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Form.css'
import '../style/Rota.css'
import onibusreceba from '../assets/onibusreceba.png';

function RotaOnibus(props) {
    return (
        <>
        <div style={{}}>
            <button className='rota' style={{width: '500px', height:'150px', marginRight: '20px', marginBottom: '20px'}}>
                <ol>
                <b>{props.nome}</b> 
                <p>Partida: {props.local}
                <p>Destino: {props.destino}</p>
                Horário: <i>{props.horario}</i>
                </p></ol>
                <img class="img" src={onibusreceba} style={{width: '120px', height: '120px'}} className='img'></img>
            </button>
        </div>
        </>
    );
}

export default RotaOnibus;