import { Header } from './Header'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Accueil from './Accueil';
import Liste from './Encheres';
import Recharger from './Recharge';
// import Header from './Header';

function Ajouter() {
    return (
        <div>
            <Header></Header>
            <section className="login-clean">
                <form method="get">
                    <h3>Produit</h3>
                    <div className="mb-3">
                        <label>Nom du produit</label>
                        <input className="form-control" type="text" id='nom' />
                    </div>
                    <div className="mb-3">
                        <label>Prix minimal</label>
                        <input className="form-control" type="number" id='prix' />
                    </div>
                    <div className="mb-3">
                        <label>Date début</label>
                        <input className="form-control" type="date" id='debut' />
                    </div>
                    <div className="mb-3">
                        <label>Durée</label>
                        <input className="form-control" type="number" id='duree' />
                    </div>
                    <div className="mb-3">
                        <label>Catégorie</label>
                        <select className='form-select' id='categorie'>
                            <option value="1">Voiture</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="button" onClick={() => {
                            var http = new XMLHttpRequest();
                            let login = [];
                            var nom = document.getElementById("nom");
                            var prix = document.getElementById("prix");
                            var debut = document.getElementById("debut");
                            var duree = document.getElementById("duree");
                            var categorie = document.getElementById("categorie");
                            http.onreadystatechange = function () {
                                if (http.readyState === 4 && http.status === 200) {
                                    login = JSON.parse(http.response)
                                    console.log(login);
                                }
                            };
                            http.open("GET", "https://wss5enchere-production.up.railway.app/addProduit?nom=" + nom.value + "&prixminimal=" + prix.value + "&datedebut=" + debut.value + "&duree=" + duree.value + "&idcategory=" + categorie.value + "&idclient=1");
                            http.send();
                            console.log("Ok");
                        }
                        }>Valider</button>
                    </div>
                </form>
            </section>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        </div>
    );
}

export default Ajouter;