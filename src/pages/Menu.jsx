 
function click() {
    console.log("ok");
}

function Login() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <IonNavLink routerDirection="forward" component={() => <Login />}>
                            {/* <IonButton><a href="http://192.168.56.1:8100/home">Home href</a></IonButton> */}
                            <IonButton>Login</IonButton>
                        </IonNavLink>
                    </li>
                    <li>
                        <IonNavLink routerDirection="forward" component={() => <Login />}>
                            {/* <IonButton><a href="http://192.168.56.1:8100/home">Home href</a></IonButton> */}
                            <IonButton>Login</IonButton>
                        </IonNavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Login;