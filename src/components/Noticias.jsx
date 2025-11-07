import '../style/Header.css';
import '../style/MenuOption.css';
import '../style/Logo.css';
import '../style/Configuracao.css'
import '../style/MenuOption2.css'
import '../style/Quadrado.css'
import '../style/Quadrado2.css'
import '../style/NoticiaTitle.css'
import '../style/NoticiaText.css'
import acidente from '../assets/onibus-1.webp'

function Noticias() {
    return (
        <>
        <div style={{float: 'right', marginTop: '31vh', marginLeft: '2vw'}}>
        <h2 className='NoticiaTitle'>acidente</h2>
        <h3 className='NoticiaText'>Onibus explodiu na BR-101 às 3 da meia tarde 15 morto slk</h3>
        </div>
        <div className='quadrado' style={{marginTop: '35vh'}}>
            <img src={acidente} alt="toma" style={{width: "43vw", height: "53vh", borderRadius: "20px", marginTop: "1vh", marginLeft: "1vw"}} />
        </div>
        </>
    );
}

export default Noticias;