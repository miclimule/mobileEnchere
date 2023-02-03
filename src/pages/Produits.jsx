import {Header,Footer} from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Ajouter(){
    const [categories,setCategorie]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/getCategory')
        .then(
            res=>{
                setCategorie(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[])
    console.log(categories);
    return(
        <div>
            <Header/>
        <section className="contact-clean">
            <form method="get">
                <h3>Ajouter un nouveau produit</h3>
                <div className="mb-3">
                    <label>Nom du produit</label>
                    <input className="form-control" type="text" id='nom'/>
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
                    <label>Catégorie</label>
                    <select className='form-select' id='categorie'>
                        {categories.map(categorie=>
                            <option key={categorie.id} value={categorie.id}>{categorie.types}</option>
                        )}
                        
                    </select>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="button" onClick={()=>
                            {
                                var http=new XMLHttpRequest();
                                let produits=[];
                                var nom=document.getElementById("nom");
                                var prix=document.getElementById("prix");
                                var debut=document.getElementById("debut");
                                var duree=document.getElementById("duree");
                                var categorie=document.getElementById("categorie");
                                http.onreadystatechange=function(){
                                    if(http.readyState===4 && http.status===200){
                                        produits=JSON.parse(http.response)
                                        console.log(produits);
                                    }
                                };
                                http.open("GET","https://wss5enchere-production.up.railway.app/addProduit?nom="+nom.value+"&prixminimal="+prix.value+"&datedebut="+debut.value+"&duree="+duree.value+"&idcategory="+categorie.value+"&idclient=1");
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

export default Ajouter;