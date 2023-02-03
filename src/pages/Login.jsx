import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Login(){
    return(
        <div className="login">
            <section className="login-clean">
            <form method="get">
                <h1>Login</h1>
                <div className="mb-3">
                    <label>Nom</label>
                    <input className="form-control" type="text" id='nom'/>
                </div>
                <div className="mb-3">
                    <label>Mot de passe</label>
                    <input className="form-control" type="password" id='pswd'/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" type="button" id='id' onClick={() => 
                    {
                        var http=new XMLHttpRequest();
                        let login=[];
                        var nom=document.getElementById("nom");
                        var pswd=document.getElementById("pswd");
                        http.onreadystatechange=function(){
                            if(http.readyState===4 && http.status===200){
                                login=JSON.parse(http.response)
                                console.log(login);
                                window.location.href='/Accueil';
                            }
                        };
                        http.open("GET","https://wss5enchere-production.up.railway.app/login?nom="+nom.value+"&mdp="+pswd.value+"");
                        http.send();
                        console.log("Ok");
                    }
                        
                    }>Se connecter</button>
                </div>
            </form>
             </section>
        </div>
    );
}

export default Login;