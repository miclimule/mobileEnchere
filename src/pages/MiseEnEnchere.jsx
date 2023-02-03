import {Header,Footer} from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import axios from 'axios';

function AjoutEnchere(){
    const [produits,setProduit]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/getProduit')
        .then(
            res=>{
                setProduit(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[])
    console.log(produits);
    return(
        <div>
            <Header/>
        <section className="contact-clean">
            <form method="get">
                <h3>Mise en enchère</h3>
                <div className="mb-3">
                    <label>Poduit</label>
                    <select className='form-select' id='produit'>
                        {produits.map(produit=>
                            <option key={produit.id} value={produit.id}>{produit.nom}</option>
                        )}
                        
                    </select>
                </div>
                <div className="mb-3">
                    <label>Quantité</label>
                    <input className="form-control" type="number" id='qte'/>
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <input className="form-control" type="text" id='desc'/>
                </div>
                <div className="mb-3">
                    <label>Prix minimal</label>
                    <input className="form-control" type="number" id='prix'/>
                </div>
                <div className="mb-3">
                    <label>Date début</label>
                    <input className="form-control" type="date" id='debut'/>
                </div>
                <div className="mb-3">
                    <label>Durée</label>
                    <input className="form-control" type="number" id='duree'/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="button" onClick={()=>
                        {
                            var http=new XMLHttpRequest();
                            let enchere=[];
                            var produit=document.getElementById("produit");
                            var qte=document.getElementById("qte");
                            var desc=document.getElementById("desc");
                            var debut=document.getElementById("debut");
                            var duree=document.getElementById("duree");
                            http.onreadystatechange=function(){
                                if(http.readyState===4 && http.status===200){
                                    enchere=JSON.parse(http.response)
                                    console.log(enchere);
                                }
                            };
                            http.open("GET","https://wss5enchere-production.up.railway.app/addEnchere?desc="+desc+"&datedepart="+debut+"&duree="+duree+"&idmaterielle="+produit+"&qte="+qte+"");
                            http.send();
                            console.log("Ok");
                        }
                    }>Valider</button>
            </div>
            </form>
        </section>
        <Footer/>
    </div>
    );
}

export default AjoutEnchere;