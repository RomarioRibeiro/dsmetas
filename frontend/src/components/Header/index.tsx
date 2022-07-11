import logo from '../../assents/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmstas-logo-container">
                <img src={logo} alt="DsMetas" />
                <h1>DSMETA</h1>
                <p>Desenvolvido por
                    <a href=" https://github.com/RomarioRibeiro" target="Romario Ribiero">Romario Ribeiro</a>
                </p>
            </div>
        </header>
    )
}

export default Header