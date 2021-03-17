/*
 * @Author: your name
 * @Date: 2021-03-09 13:28:55
 * @LastEditTime: 2021-03-17 16:04:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Messages/Messages.tsx
 */
import React, { Component, useRef } from "react";
import styles from "./Messages.module.less";
// 引入Header组件
import Header from "../../components/Header/Header";
import Music from "../../components/Music/Music";
// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";
// 引入api
import { userDetail, userLogin } from "../../utils/Api";
// 引入utils公有函数包
import { isEquipment } from "../../utils/time";

const MaterialStyle = {
  inputWidth: {
    width: "100%",
  },
};
interface Iuser {
  email: string;
  username: string;
  password: string;
  ip: string;
  address: string;
  istype: string | undefined | boolean;
  islogin: boolean;
}
class Messages extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: "", //留言内容
      open: false, //控制弹窗是否显示
      loginState: false,
      user: {
        email: "",
        username: "",
        password: "",
        ip: "",
        address: "",
        istype: "",
        islogin: false,
      },
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
      ruleEmail: false,
      ruleUserName: false,
      rulePassword: false,
      helperEmail: " ",
      helperUsername: " ",
      helperPassword: " ",
      userInfo: {},
    };
  }
  // value留言框变更时触发事件
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value,
    });
  };
  /**
   * @description: 更改email  email
   * @param {React} event
   * @return {*}
   */
  handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.email = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurEmail = (event: any) => {
    const state: any = this.state;
    const value: string = event.target.value;
    const user: Iuser = state.user;
    // 正则校验
    if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
      this.setState(
        {
          ruleEmail: false,
          helperEmail: " ",
        },
        async () => {
          // 判断email是否重复
          const res: any = await userDetail({ email: state.user.email });
          if (!res.ok) {
            user.islogin = true;
            this.setState({
              user: user,
            });
          } else {
            user.islogin = false;
            this.setState({
              user: user,
            });
          }
        }
      );
    } else {
      this.setState({
        ruleEmail: true,
        helperEmail: "请填写或输入正确的邮箱！",
      });
    }
  };
  /**
   * @description: 更改账户名  username
   * @param {React} event
   * @return {*}
   */
  handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.username = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurUsername = (event: any) => {
    const value: string = event.target.value;
    if (value.length >= 2) {
      this.setState({
        ruleUsername: false,
        helperUsername: " ",
      });
    } else {
      this.setState({
        ruleUsername: true,
        helperUsername: "请填写超过2位的用户名！",
      });
    }
  };
  /**
   * @description: 更改密码  password
   * @param {React} event
   * @return {*}
   */
  handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state: any = this.state;
    const user: Iuser = state.user;
    user.password = event.target.value;
    this.setState({
      user,
    });
  };
  handleBlurPassword = (event: any) => {
    const value: string = event.target.value;
    if (value.length >= 6) {
      this.setState({
        rulePassword: false,
        helperPassword: " ",
      });
    } else {
      this.setState({
        rulePassword: true,
        helperPassword: "请填写不小于6位的密码！",
      });
    }
  };

  // 弹窗关闭事件
  openClose = () => {
    this.setState({
      open: false,
    });
  };
  // 弹窗打开事件
  openOpen = () => {
    this.setState({
      open: true,
    });
  };
  /**
   * @description: 登录事件
   * @param {*}
   * @return {*}
   */
  login = async () => {
    // 获取ip  与  计算机类型
    const state: any = this.state;
    const user: Iuser = state.user;
    const userIpAd = (window as any).returnCitySN;
    const istype: boolean | "ios" | "android" | "blackberry" | "windows" | undefined = isEquipment();
    user.ip = userIpAd.cip;
    user.address = userIpAd.cname;
    user.istype = istype;
    this.setState(
      {
        user: user,
      },
      async () => {
        const res: any = await userLogin(state.user);
        if (res.ok) {
          window.localStorage.setItem("user", JSON.stringify(res.data));
          this.setState({
            loginState: true,
            userInfo:res.data
          });
          this.openClose();
        }
      }
    );
  };

  /**
   * @description: 退出事件
   * @param {*}
   * @return {*}
   */
  logoout = () => {
    window.localStorage.removeItem("user");
    this.setState({
      loginState: false,
      userInfo: {}
    });
  };
  componentDidMount() {
    const userInfo: any = window.localStorage.getItem("user");
    if (userInfo) {
      this.setState({
        loginState: true,
        userInfo: JSON.parse(userInfo),
      });
    } else {
      this.setState({
        loginState: false,
      });
    }
  }
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
          <div className={styles.loginState}>
            {!state.loginState ? (
              <Button onClick={this.openOpen} color="primary">
                登录
              </Button>
            ) : (
              <Button onClick={this.logoout} color="secondary">
                退出
              </Button>
            )}
          </div>
          <TextField error={false} helperText={"Incorrect entry."} className={props.classes.inputWidth} size="small" value={state.text} onChange={this.handleChange} label={state.userInfo.username||"先登录吧！"} multiline rows={4} variant="outlined" />
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
        {/* <Music /> */}
        <Gotop />

        {/* 弹窗区域 */}
        <Dialog fullWidth={true} maxWidth={"sm"} open={state.open} keepMounted onClose={this.openClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
          <DialogTitle id="alert-dialog-slide-title">{"登录"}</DialogTitle>
          <DialogContent>
            <div className={styles.contentdiv}>
              <TextField error={state.ruleEmail} helperText={state.helperEmail} className={props.classes.inputWidth} size="small" required value={state.user.Email} onChange={this.handleChangeEmail} onBlur={this.handleBlurEmail} label="Email" variant="outlined" />
              <TextField error={state.ruleUsername} helperText={state.helperUsername} className={props.classes.inputWidth} size="small" required value={state.user.username} onChange={this.handleChangeUsername} onBlur={this.handleBlurUsername} label="用户名" variant="outlined" />
              <TextField type="password" error={state.rulePassword} helperText={state.helperPassword} className={props.classes.inputWidth} size="small" required value={state.user.password} onChange={this.handleChangePassword} onBlur={this.handleBlurPassword} label="密码" variant="outlined" />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.login} color="primary">
              登录
            </Button>
            <Button onClick={this.openClose} color="primary">
              取消
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(MaterialStyle)(Messages);
