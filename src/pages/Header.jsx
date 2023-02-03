import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-bootstrap-icons';

function Header(){
    return(
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
            <h1 style={{fontSize: '24px',color: 'var(--bs-blue)'}}>Enchère</h1>
            <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Enchère en cours</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Produits">Nouveau produit</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/MiseEnEnchere">Vendre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Liste">Mes enchères</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Recharge">Recharger mon compte</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Accueil">Historique</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}

function Footer(){
    return(
            <footer className="footer-basic" style={{marginTop:'5%'}}>
            <p className="copyright">Copyright © 2023</p>
        </footer>
    );
}
export {Header,Footer};