/*
 * @Author: your name
 * @Date: 2021-03-09 13:28:55
 * @LastEditTime: 2021-03-10 16:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Messages/Messages.tsx
 */
import React, { Component } from "react";
import styles from "./Messages.module.less";
// 引入Header组件
import Header from "../../components/Header/Header";
// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MaterialStyle = {
  inputWidth: {
    width: "100%",
  },
};

class Messages extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "", //留言内容
      loginState: false,
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

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    const state: any = this.state;
    const props: any = this.props;
    return (
      <div>
        {/* 头部组件区 */}
        <Header active="/Messages" {...props} {...state} />
        {/* 留言板区域 */}
        <div className={styles.box}>
          <p className={styles.title}>留言板</p>
          <div className={styles.loginState}>{!state.loginState ? <Button color="primary">登录</Button> : <Button color="secondary">退出</Button>}</div>
          <TextField error={false} helperText={"Incorrect entry."} className={props.classes.inputWidth} size="small" value={state.text} onChange={this.handleChange} label="先登录吧" multiline rows={4} variant="outlined" />
          {/* 留言内容区域 */}
          <div className={styles.msgBox}>
            <div className={styles.msgItem}>
              <p>{90}楼</p>
              <div className={styles.msg}>
                <div>
                  <span className={styles.name}>章</span>
                </div>
                <div className={styles.right}>
                  <div>
                    <span className={styles.nameTitle}>{"我是一个小仙男"}</span> <span className={styles.dates}>1个月前</span>
                  </div>
                  <div className={styles.msgContent}>{"github没有后端代码"}</div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.huifu}>回复</span>{" "}
                  </div>
                  {/* 如果有回复 */}
                  <div className={styles.msg}>
                    <div>
                      <span className={styles.name}>章</span>
                    </div>
                    <div className={styles.right}>
                      <div>
                        <span className={styles.nameTitle}>{"我是一个小仙男"}</span> <span className={styles.dates}>1个月前</span>
                      </div>
                      <div className={styles.msgContent}>{"github没有后端代码"}</div>
                      <div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.huifu}>回复</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default withStyles(MaterialStyle)(Messages);
