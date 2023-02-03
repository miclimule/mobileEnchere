import {Header,Footer} from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import React from  'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Accueil(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/listEnchere')
        .then(
            res=>{
                setData(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[])

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
    console.log(data,categories);
    return(
        <div>
            <Header/>
            <div className="container" style={{marginTop: '5%',width: '80%',display: 'grid'}}>
            <div className="row">
                <div className="col-md-6" style={{background: 'var(--bs-white)',paddingBottom:'5%',width: '340px',borderRadius:'0.25rem'}}>
                    <form>
                        <h4 style={{textAlign: 'center'}}>Recherche avancé</h4>
                        <div><label style={{fontWeight: 'bold'}}>Mot clé:</label>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            {categories.map(categorie=> 
                                            <td key={categorie.id}>
                                                <div className="form-check">
                                                <input className="form-check-input" type="checkbox" key={categorie.id} name='motcle'/>
                                                <label className="form-check-label" for="formCheck-1">{categorie.types}</label></div>
                                            </td>
                                            )}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <label style={{fontWeight: 'bold'}}>Date:</label>
                            <input className="form-control" type="date" name='date'/>
                        </div>
                        <div>
                            <label style={{fontWeight: 'bold'}}>Prix:</label>
                            <input className="form-control" type="number" name='prix'/>
                        </div>
                        <div>
                            <label style={{fontWeight: 'bold'}}>Catégorie:</label>
                            <select className="form-select" name='categorie'>
                            {categories.map(categorie=>
                                <option value={categorie.id}>{categorie.types}</option>
                            )}
                            </select>
                        </div>
                        <div>
                            <label style={{fontWeight: 'bold'}}>Status:</label>
                            <select className="form-select" name='status'>
                                <option value="0">En cours</option>
                                <option value="1">Terminé</option>
                            </select>
                        </div>
                        <button className='btn btn-primary' style={{marginTop:'3%'}} onClick={()=>
                         {
                            var http=new XMLHttpRequest();
                            let resultats=[];
                            var motcle=document.getElementById("motcle");
                            var date=document.getElementById("date");
                            var prix=document.getElementById("prix");
                            var categorie=document.getElementById("categorie");
                            var status=document.getElementById("status");
                            http.onreadystatechange=function(){
                                if(http.readyState===4 && http.status===200){
                                    resultats=JSON.parse(http.response)
                                    console.log(resultats);
                                }
                            };
                            http.open("GET","https://wss5enchere-production.up.railway.app/advanceSearch?motCle="+motcle.value+"&prix="+prix.value+"&date="+date.value+"&categorie="+categorie.value+"&status="+status.value+"");
                            http.send();
                            console.log("Ok");
                        }
                        }
                        >Rechercher</button>
                    </form>
                </div>
                <div className="col-md-6" style={{marginLeft: '5%'}}>
                    <h3 style={{textAlign: 'center'}}>Liste enchère en cours</h3>
                    <div style={{marginTop: '5%'}}>
                        <div className="table-responsive" style={{background: 'var(--bs-white)',marginLeft: '5%',width: '100%',borderRadius:'0.25rem'}}>
                            <table className="table">
                                <tbody>
                                {data.map(enchere=>
                                    <tr>
                                        <td key={enchere.id}>Numéro enchère : {enchere.id}</td>
                                        <td key={enchere.id}>Produit : {enchere.nom}</td>
                                        <td key={enchere.id}>Prix :</td>
                                        <td key={enchere.id}>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Accueil;