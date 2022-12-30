import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PageRouting from './PageRouting'
import Page404 from './components/Page404'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Redirect exact path="/" to="/pocetna" />
            <Route path='/pocetna' component={PageRouting} />
            <Route path='/onama' component={PageRouting} />
            <Route path='/kontakt' component={PageRouting} />
            <Route path='/vijesti' component={PageRouting} />
            <Route path='/biografija' component={PageRouting} />
            <Route path='/kategorija_vijesti' component={PageRouting} />
            <Route path='/detaljnije' component={PageRouting} />
            <Route path='/oglasi' component={PageRouting}></Route>
            <Route path='/clanovi' component={PageRouting}></Route>
            <Route path='/akti' component={PageRouting}></Route>
            <Route path='/emaPlatforma' component={PageRouting}></Route>
            <Route path='/izbori' component={PageRouting}></Route>
            <Route path='/organi_komore' component={PageRouting}></Route>
            <Route path='/obrasci' component={PageRouting}></Route>
            <Route path='/izdavacka_djelatnost' component={PageRouting}></Route>
            <Route path='/kongres' component={PageRouting}></Route>
            <Route component={Page404}/>
          </Switch>
      </Router>
    )
  }
}

export default App;
