import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Form.css'
import '../style/Rota.css'
import RotaOnibus from './RotaOnibus.jsx'
import TomaImage from '../assets/toma.png';
import { useState } from 'react';
import '../style/rotainfo.css';

function Horarios() {
    const [selectedRota, setSelectedRota] = useState(null);
    return (
        <>
        <div style={{overflowY: 'scroll', height: '250px', width: '800px', float: 'left'}}>
        <RotaOnibus
        nome="Rota Biguaçu" 
        local="Halloween SESI SENAI" 
        destino="Terminal Biguaçu" 
        horario="12:55"
        onSelect={setSelectedRota}
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        onSelect={setSelectedRota}
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        onSelect={setSelectedRota}
        />
        </div>
        <h3>Detalhes da Rota</h3>
        <div className='rotainfo'style={{float: 'left'}}>
            
        </div>

        <div style={{float: 'right'}}>
        {selectedRota ? (
                    <>
                        <h3>Detalhes da Rota</h3>
                        <p><strong>Rota:</strong> {selectedRota.nome}</p>
                        <p><strong>Partida:</strong> {selectedRota.local}</p>
                        <p><strong>Destino:</strong> {selectedRota.destino}</p>
                        <p><strong>Horário:</strong> <i>{selectedRota.horario}</i></p>
                    </>
                ) : (
                    <p></p>
                )}
        </div>
        </>
    );
}

export default Horarios;