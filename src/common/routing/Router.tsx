import { Route } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { LoginPage } from "../security-web";

const Router: React.FC = () => (
    <IonRouterOutlet id="main">
        <Route path={`/login`} component={LoginPage} exact />
        <Route path={`/`} component={LoginPage} exact />
    </IonRouterOutlet>
);

export default Router;
