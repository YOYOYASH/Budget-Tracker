import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import { SpeechProvider } from '@speechly/react-client';

import {Provider} from'./context/context';
import App from './App'

ReactDOM.render(
    <SpeechProvider appId="9f64fd71-173c-4993-9722-bc9de7ff15da" language="en-US">
        <Provider>
     <App />
  </Provider>
    </SpeechProvider>,
    document.getElementById('root'),
);
