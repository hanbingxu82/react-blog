/*
 * @Author: your name
 * @Date: 2021-03-05 16:38:08
 * @LastEditTime: 2021-03-07 19:29:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/component/Home/Home.tsx
 */

import React, { Component } from "react";

import styles from "./Home.module.less";

// 引入Header组件
import Header from "../../components/Header/Header";

class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      navName: [
        {
          nav: "简历",
          href: "/Resumes",
        },
        {
          nav: "点滴",
          href: "/Home",
        },
        {
          nav: "留言",
          href: "/Message",
        },
      ],
    };
  }
  login = () => {};
  render() {
    const state: any = this.state;
    return (
      <div>
        <Header {...state} />
        {/* 内容区域 */}
        <div className={styles.box}>
          {/* 左侧线 */}
          <div className={styles.leftLine}>
            <span className={styles.circle}></span>
            <div className={styles.line}></div>
          </div>
          {/* 右侧内容区域 */}
        </div>
      </div>
    );
  }
}

export default Home;
