import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Form.css'
import '../style/Rota.css'
import RotaOnibus from './RotaOnibus.jsx'
import { useState, useEffect } from 'react';
import tempo from '../assets/tempo.png'
import caneta from '../assets/caneta.png'
import ponto from '../assets/ponto.png'
import pessoa from '../assets/pessoa.png'
import '../style/rotainfo.css'; 

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function Horarios() {
    const [selectedRota, setSelectedRota] = useState(null);
    const [rotas, setRotas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadRotas() {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`${API_BASE}/getallrotas`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                const list = Array.isArray(data?.message) ? data.message : [];
                setRotas(list);
            } catch (e) {
                setError('Falha ao carregar rotas.');
            } finally {
                setLoading(false);
            }
        }
        loadRotas();
    }, []);
    return (
        <>
        <div style={{width: '100vw'}}>
        {loading && (<p style={{color: 'gray'}}>Carregando rotas...</p>)}
        {error && (<p style={{color: 'red'}}>{error}</p>)}
        {!loading && !error && rotas.map((rota) => (
            <RotaOnibus
                key={rota.Id}
                nome={`${rota.Numero} - ${rota.Name}`}
                horario={rota.Horario_partida}
                passageiros_min={rota.Numero_passageiros}
                passageiros_max={rota.Maximo_passageiros}
                onSelect={setSelectedRota}
            />
        ))}

        {(!loading && !error && rotas.length === 0) && (
            <p style={{color: 'gray'}}>Nenhuma rota encontrada.</p>
        )}
        </div>
        </>
    );
}

export default Horarios;