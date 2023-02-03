import { Header } from './Header';
// import Header from './Header';
import axios from 'axios';

function change() {
    const input = document.getElementById("file");
    var prod = document.getElementById("prod");
    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const base64 = reader.result;
        console.log(base64);

        const data = {
            "id": prod.value,
            "base64": base64
        }
        const url = "https://wss5enchere-production.up.railway.app/setImgProduit";
        axios.post(url, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

}

function Photos() {
    return (
        <div>
            <Header></Header>
            <section className="login-clean">
                <form method="get">
                    <h3>Photos</h3>
                    <div className="mb-3">
                        <label>Produit</label>
                        <input className="form-control" type="number" id='prod' placeholder='1' />
                    </div>
                    <div className="mb-3">
                        <label>Img</label>
                        <input className="form-control" type="file" id='file' />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="button" onClick={change}>Valider</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Photos;