import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Accueil from './pages/Accueil';
import Ajouter from './pages/AjoutProduit';
import Participation from './pages/Encheres';
import Photos from './pages/photos';

import Login from "./pages/Login";
import Liste from "./pages/Encheres";
import Recharger from "./pages/Recharge";
import AjoutEnchere from "./pages/MiseEnEnchere";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/Accueil">
          <Accueil/>
        </Route>
        <Route exact path="/Ajouter">
          <Ajouter />
        </Route>
        <Route exact path="/Photos">
          <Photos />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Liste">
          <Liste />
        </Route>
        <Route exact path="/Produits">
          <Ajouter />
        </Route>
        <Route exact path="/Recharge">
          <Recharger />
        </Route>
        <Route exact path="/MiseEnEnchere">
          <AjoutEnchere />
        </Route>
        <Route exact path="/">
          <Redirect to="/Ajouter" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
