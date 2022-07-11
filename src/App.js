import { Route, Switch, BrowserRouter } from "react-router-dom";

import Homepage from "./homepage";
import Equipe from "./equipe";
import Independance from "./independance";
import Features from "./features";
import FAQ from "./faq";
import MentionsLegales from "./mentions-legales";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Homepage />} />
                <Route path="/equipe" exact render={() => <Equipe />} />
                <Route path="/independance" exact render={() => <Independance />} />
                <Route path="/features" exact render={() => <Features />} />
                <Route path="/faq" exact render={() => <FAQ />} />
                <Route path="/mentions-legales" exact render={() => <MentionsLegales />} />
            </Switch>
        </BrowserRouter>
    )
}

export default App