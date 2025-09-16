import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import tomaImg from '../assets/toma.png';

function Header() {
    return (
        <>
        <button className='option2'>login motorista</button>

        <button className='configuracao'>
        <img src={tomaImg} alt ="toma" width="65" height="65"/>
        </button>

        <div className="logo">logo</div>

        <div className="header">

        <button className="option">HOME</button>

        <button className="option">HORÁRIOS</button>

        <button className="option">CONTATO</button>
        
        </div>
        </>
    );
}

export default Header;