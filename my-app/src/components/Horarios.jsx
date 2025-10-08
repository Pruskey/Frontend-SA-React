import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Form.css'
import '../style/Rota.css'
import RotaOnibus from './RotaOnibus.jsx'
import { useState } from 'react';
import tempo from '../assets/tempo.png'
import caneta from '../assets/caneta.png'
import ponto from '../assets/ponto.png'
import '../style/rotainfo.css';

function Horarios() {
    const [selectedRota, setSelectedRota] = useState(null);
    return (
        <>
        <div style={{overflowY: 'scroll', height: '400px', width: '800px', float: 'left'}}>
        <RotaOnibus
        nome="Rota Biguaçu" 
        local="Halloween SESI SENAI" 
        destino="Terminal Biguaçu" 
        horario="12:55"
        passageiros_min="6"
        passageiros_max="9"
        onSelect={setSelectedRota}
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        passageiros_min="9"
        passageiros_max="12"
        onSelect={setSelectedRota}
        />
        <RotaOnibus
        nome="Rota Professor"
        local="toma"
        destino="toma"
        horario="12:00"
        passageiros_min="9"
        passageiros_max="12"
        onSelect={setSelectedRota}
        />
        </div>
        <h3>Detalhes da Rota</h3>
        <div className='rotainfo'style={{float: 'left'}}>
        {selectedRota ? (
            <p><strong>Rota: </strong>{selectedRota.nome}</p>
        ) : (
            <p style={{color: 'gray'}}>Nome da rota...</p>
        )}
        <img src={caneta} style={{height: '100px', width: '100px', marginLeft: 'auto'}}></img>
        </div>

        <div className='rotainfo'style={{float: 'left'}}>
        {selectedRota ? (
            <p><strong>Partida: </strong>{selectedRota.local}</p>
        ) : (
            <p style={{color: 'gray'}}>Local de partida...</p>
        )}
        <img src={ponto} style={{height: '100px', width: '100px', marginLeft: 'auto'}}></img>
        </div>

        <div className='rotainfo'style={{float: 'left'}}>
        {selectedRota ? (
            <p><strong>Destino: </strong>{selectedRota.destino}</p>
        ) : (
            <p style={{color: 'gray'}}>Destino da rota...</p>
        )}
        <img src={ponto} style={{height: '100px', width: '100px', marginLeft: 'auto'}}></img>
        </div>
        
        <div className='rotainfo'style={{float: 'left'}}>
        {selectedRota ? (
            <p><strong>Horário: </strong>{selectedRota.horario}</p>
        ) : (
            <p style={{color: 'gray'}}>Horário de partida...</p>
        )}
        <img src={tempo} style={{height: '100px', width: '100px', marginLeft: 'auto'}}></img>
        </div>

        <div className='rotainfo'style={{float:'left'}}>
        {selectedRota  ? (
            <p><strong>Passageiros: </strong>{selectedRota.passageiros_min}<strong> à </strong>{selectedRota.passageiros_max}</p>
        ) : (
            <p style={{color: 'gray'}}>Estimativa de passageiros...</p>
        )}

        </div>
        
        </>
    );
}

export default Horarios;