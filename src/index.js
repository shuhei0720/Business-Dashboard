import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyTime from './MyTime';
import {Rnd} from 'react-rnd';
import MyTimeGraph from './MyTimeGraph';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rnd
      default={{
        x: 0, y: 0,
        width: 320, height: 200,
    }}>
      <MyTime area="東京" zone="Asia/Tokyo" />
    </Rnd>
    <Rnd
      default={{
        x: 320, y: 0,
        width: 320, height: 200,
      }}>
        <MyTime area="ニューヨーク" zone="America/New_York" />
      </Rnd>

      <Rnd
        default={{
          x: 0, y: 200,
          width: 640, height: 200,
        }}>
          <MyTimeGraph />
        </Rnd>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
