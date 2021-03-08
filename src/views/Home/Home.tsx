/*
 * @Author: your name
 * @Date: 2021-03-05 16:38:08
 * @LastEditTime: 2021-03-08 10:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/component/Home/Home.tsx
 */

import React, { Component } from "react";

import styles from "./Home.module.less";

// 引入Header组件
import Header from "../../components/Header/Header";

// 引入图片
import img from "../../assets/images/1587477767089.jpg"

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
        {
          state.navName.map((item:any)=>{
             /* 内容区域 */ console.log(item)
            return  <div className={styles.box}>       
              {/* 左侧线 */}
              <div className={styles.leftLine}>
                <span className={styles.circle}></span>
                <div className={styles.line}></div>
              </div>
              {/* 右侧内容区域 */}
              <div className={styles.rightContent}>
                {/* 内容显示区--日期显示标题头 */}
                <a className={styles.dates} href="/detail?id=5e9efd26601bd82819211a1e">
                  <span className={styles.trig}></span>
                  <span className={styles.date}>2019.03.20</span>
                </a>
                {/* 内容显示区--标题内容 */}
                <div className={styles.title}>
                  <p className={styles.p}>ubuntu 从零搭建环境，部署项目</p>
                </div>
                {/* 内容显示区--图片区 */}
                <div className={styles.imgs}>
                  <img src={img} alt=""/>
                </div>
                {/* 内容显示区--详情内容 */}
                <div className={styles.details}>
                  <p className={styles.p}>从零开始搭建服务器环境的步骤</p>
                </div>
              </div>
            </div>
    
          })
        }
        <div><p className={styles.bottomp}>© SmallTinkerbell | <a href="http://www.miitbeian.gov.cn">蜀ICP备200008xx号</a></p></div>
      </div>
    );
  }
}

export default Home;
