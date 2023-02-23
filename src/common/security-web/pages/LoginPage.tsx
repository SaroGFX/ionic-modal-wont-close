import { IonPage, IonContent, IonIcon } from "@ionic/react";
import { LoginForm } from "../components";
import { apertureOutline } from "ionicons/icons";

import LoginCSS from "./LoginPage.module.scss";

const LoginPage: React.FC = () => {
    return (
        <IonPage className={LoginCSS.LoginPage}>
            <IonContent
                scrollX={false}
                scrollY={false}
                className={LoginCSS.LoginForm}
            >
                <div className={LoginCSS.Background}>
                    <div className={LoginCSS.LoginAlignment}>
                        <IonIcon icon={apertureOutline} color="white" />
                        <LoginForm />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
