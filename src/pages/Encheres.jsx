import {Header,Footer} from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Liste(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/getHistorique?idEnchere=1')
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

    const [encheres,setEnchere]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/myEnchere')
        .then(
            res=>{
                setEnchere(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[])
    console.log(data,encheres);


    return(
        <div>
           <Header/> 
           <div className="container" style={{marginTop: '7%',width: '90%'}}>
                <div className="row">
                    <div className="col-md-6">
                        <div style={{background: 'var(--bs-white)'}}>
                            <h5>Enchère auxquelles vous participez</h5>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        {data.map(historique=>
                                            <tr>
                                            <td key={historique.idEnchere}>Numéro : {historique.idEnchere}</td>
                                            <td key={historique.idEnchere}>Produit : {historique.nommaterielle}</td>
                                        </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div style={{background: 'var(--bs-white)'}}>
                            <h5>Enchère que vous avez créé</h5>
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        {encheres.map(enchere=>
                                            <tr>
                                            <td>Numéro : {enchere.id}</td>
                                            <td>Produit : </td>
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

export default Liste;