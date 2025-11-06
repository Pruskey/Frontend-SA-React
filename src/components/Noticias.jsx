import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Quadrado.css'
import '../style/Quadrado2.css'
import '../style/NoticiaTitle.css'
import '../style/NoticiaText.css'
import tomaImg from '../assets/toma.png';

function Noticias() {
    return (
        <>
        <div style={{float: 'right', marginTop: '31vh', marginLeft: '2vw'}}>
        <h2 className='NoticiaTitle'>acidente</h2>
        <h3 className='NoticiaText'>acidente2</h3>
        </div>
        <div className='quadrado' style={{marginTop: '35vh'}}>
        </div>
        </>
    );
}

export default Noticias;