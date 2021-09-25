import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, SignUp, Profile } from  '../contaniner';
function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/Profile' component={Profile} />
        </Switch>
        </Router>
    )
}
export default AppRouter;