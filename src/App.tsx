import { useTranslation } from "react-i18next";
import { IonReactRouter } from "@ionic/react-router";
import { Suspense } from "react";
import { StatusBar, Style } from "@capacitor/status-bar";
import { IonApp, IonSplitPane, setupIonicReact } from "@ionic/react";
import { Router } from "./common/routing";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Global styles */
import "./theme/colors.scss";
import "./theme/variables.scss";


setupIonicReact({
    swipeBackEnabled: false,
});

StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
// setBackgroundColor for android only
StatusBar.setBackgroundColor({ color: "#4499DC" }).catch(() => {});

const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <IonApp>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <Suspense fallback={<div>{t("Loading")}...</div>}>
                            <Router />
                        </Suspense>
                    </IonSplitPane>
                </IonReactRouter>
            </IonApp>
        </>
    );
};

export default App;
