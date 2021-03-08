/*
 * @Author: your name
 * @Date: 2021-03-05 15:39:30
 * @LastEditTime: 2021-03-05 16:49:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.less";
import { HashRouter, Switch, Route } from "react-router-dom";
import routers from './router';
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        {routers.map((v) => (
          <Route key={v.path} path={v.path} exact={v.exact} component={v.component} />
        ))}
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
