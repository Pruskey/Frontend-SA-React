import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/ConfigOption.css'
import tomaImg from '../assets/toma.png';
import logo from '../assets/logo.png';
import '../style/Switch.css';

function Header() {
    return (
        <>
        <div className="quadrado" style={{width: '18vw', height: '22vh', marginLeft: '10vw', backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: '0px 4px 0px 0px rgba(193, 193, 193, 1)'}}>
        <h2 className="NoticiaTitle" style={{marginLeft: '2vw', color: 'rgb(255, 115, 0)'}}>Modo Escuro</h2>
        <label
        style={{borderRadius: '10px', marginLeft: '2vw' }}
        className="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
        </label>
        
        </div>
        </>
    );
}

export default Header;