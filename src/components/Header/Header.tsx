/*
 * @Author: your name
 * @Date: 2021-03-07 09:55:48
 * @LastEditTime: 2021-03-07 10:11:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/components/Header/Header.tsx
 */
import React, { Component } from "react";
import author from "../../assets/images/author.jpeg";
import styles from "./Header.module.less";
interface Istate {
  nav: string;
  href: string;
}
class Header extends Component {
  constructor(props: any) {
    super(props);
    console.log(this.props)
  }
  render() {
    const props:any = this.props;
    return (
      <div className={styles.box}>
        {/* header头像部门 */}
        <div className={styles.header}>
          <img className={styles.img} src={author} alt="" />
        </div>
        {/* 名称部分 */}
        <div className={styles.name}>
          <p className={styles.p}>RedSpite</p>
        </div>
        {/* 简历  点滴  留言部分 */}
        <div className={styles.nav}>
          {props.navName.map((item: Istate) => {
            return <div key={item.href}>{item.nav}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Header;
