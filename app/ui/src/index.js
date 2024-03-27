import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/order/redux/Store'

//*wrap our components with <Provider>*/ 
//* it takes our Redux store as a prop so all the components in our app can access and use the global state. */ 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
