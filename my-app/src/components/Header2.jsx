import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/Botao-Motorista.css'
import tomaImg from '../assets/toma.png';

function Header() {
    return (
        <>
        <button className='motorista'>login motorista</button>
        <button className='configuracao'>
        <img src={tomaImg} alt ="toma" width="65" height="65"/>
        </button>
        <div className="logo">logo</div>
        <div className="header">
        <button className="option">toma</button>
        <button className="option">toma2</button>
        <button className="option">toma3</button>
        <button className="option">toma4</button>
        </div>
        </>
    );
}

export default Header;