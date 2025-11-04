import { Link } from 'react-router-dom';
import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css';
import '../style/MenuOption2.css';
import tomaImg from '../assets/toma.png';
import logo from '../assets/logo.png';

function Header() {
  return (
    <>
      <Link to="/configuracao" className="configuracao">
        <img src={tomaImg} alt="toma" width="85vw" height="85vh" />
      </Link>

      <div className="logo">
        <img src={logo} width="105" height="105" alt="logo" />
      </div>

      <div className="header">
        <Link to="/" style={{ marginRight: '10vw' }} className="option">HOME</Link>
        <Link to="/horarios" style={{ marginRight: '10vw' }} className="option">HORÁRIOS</Link>
        <Link to="/contato" style={{ marginRight: '0vw' }} className="option">CONTATO</Link>
      </div>
    </>
  );
}

export default Header;
