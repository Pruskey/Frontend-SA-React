import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Form.css'
import '../style/Rota.css'
import RotaOnibus from './RotaOnibus.jsx'
import TomaImage from '../assets/toma.png';

function Horarios() {
    return (
        <>
        <RotaOnibus
        nome="Rota Biguaçu" 
        local="Halloween SESI SENAI" 
        destino="Terminal Biguaçu" 
        horario="12:55"
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        />
        </>
    );
}

export default Horarios;