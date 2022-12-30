import React from 'react';
import { render } from 'react-dom';
import './assets/css/theme-overwrites.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import * as serviceWorker from './serviceWorker'


render (
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)

										function hidee() {
  var x = document.getElementById("skupstina");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
