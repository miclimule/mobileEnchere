import {Header,Footer} from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import axios from 'axios';


function Recharger(){
    const [produits,setProduit]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/getSolde?id=1')
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
            <section className="login-clean">
                <form method="get">
                    <h4>Recharger mon compte</h4>
                    <div className="mb-3">
                        <label>Solde actuel : </label>
                    </div>
                    <div className="mb-3">
                        <label>Demande</label><input className="form-control" type="number"  id='montant'/>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="button" onClick={()=>
                            {
                                var http=new XMLHttpRequest();
                                let retour=[];
                                var montant=document.getElementById("montant");
                                http.onreadystatechange=function(){
                                    if(http.readyState===4 && http.status===200){
                                        retour=JSON.parse(http.response);
                                        console.log(retour);
                                    }
                                };
                                http.open("GET","https://wss5enchere-production.up.railway.app/addDemande?montant="+montant.value+"&uuid=a3688507-f3b8-49bb-9b19-15608c7e6cc1");
                                http.send();
                                console.log("Ok");
                            }
                        }>Envoyer la demande</button>
                    </div>
                </form>
            </section>
            <Footer/>
        </div>
    );
}

export default Recharger;