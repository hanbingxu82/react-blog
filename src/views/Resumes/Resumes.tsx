/*
 * @Author: your name
 * @Date: 2021-03-09 13:29:08
 * @LastEditTime: 2021-03-11 11:07:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Resumes/Resumes.tsx
 */
import React, { Component } from "react";
import styles from "./Resumes.module.less";

// 引入Header组件
import Header from "../../components/Header/Header";

// 引入图片
import img from "../../assets/images/1587477767089.jpg";

// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";
class Resumes extends Component {
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
          href: "/",
        },
        {
          nav: "留言",
          href: "/Messages",
        },
      ],
    };
  }
  render() {
    const state: any = this.state;
    const props: any = this.props;
    return (
      <div>
        {/* 头部组件区 */}
        <Header active="/Messages" {...props} {...state} />
        {/*  */}
        {/* 底部备案号 */}
        <div>
          <p className={styles.bottomp}>
            © SmallTinkerbell | <a href="http://www.miitbeian.gov.cn">蜀ICP备200008xx号</a>
          </p>
        </div>
        <Gotop />
      </div>
    );
  }
}

export default Resumes;
