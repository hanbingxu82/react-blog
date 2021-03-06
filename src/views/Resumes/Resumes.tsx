/*
 * @Author: your name
 * @Date: 2021-03-09 13:29:08
 * @LastEditTime: 2021-07-14 18:59:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/views/Resumes/Resumes.tsx
 */
import React, { Component } from "react";
import styles from "./Resumes.module.less";
import { withStyles } from "@material-ui/core/styles";
// 引入Header组件
import Header from "../../components/Header/Header";

// import { blogDetail,imgURL } from "../../utils/Api";
// import Music from "../../components/Music/Music";
// 引入图片
// import img from "../../assets/images/1587477767089.jpg";

// 引入点击回到顶部
import Gotop from "../../components/GoTop/GoTop";
// 引入右上角github跳转图标
import GitHub from '../../components/GitHub/GitHub'


// 下载文件组件
import DownLoad from "../../components/DownLoad/DownLoad";
const ResumesStyle = {
  inputWidth: {
    paper: {
      textAlign: "center",
      background: "#efefef",
    },
  },
};
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
        <Header active="/Resumes" {...props} {...state} />
        {/* 简历内容区域 */}
        <div className={styles.box}>
          {/* 个人信息模块 */}
          <h1>个人信息</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col_4}>韩炳旭 | 男 | 23</div>
              <div className={styles.col_4}>大专 | 河北软件 | Web前端</div>
              <div className={styles.col_4}>前端开发 | 3 年工作经验</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col_4}>期望职位：Web前端</div>
              <div className={styles.col_4}>期望城市：北京</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                Github：
                <a rel="noreferrer" target="_blank" href="https://github.com/hanbingxu82">
                  https://github.com/hanbingxu82
                </a>{" "}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                CSDN：
                <a rel="noreferrer" target="_blank" href="https://blog.csdn.net/clli_Chain">
                  https://blog.csdn.net/clli_Chain
                </a>{" "}
              </div>
            </div>
          </div>
          {/* 联系方式模块 */}
          <h1>联系方式</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col_4}>手机：18731283611</div>
              <div className={styles.col_4}>Email：hbx831@126.com</div>
              <div className={styles.col_4}>网站：<a href="https://tinkerbell.top" target="_blank" rel="noopener noreferrer">www.tinkerbell.top</a> </div>
            </div>
          </div>
          {/* 技能掌握模块 */}
          <h1>技能掌握</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>- 可独立负责、开发前端平台项目（Web App, PC, 小程序等）。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 三年开发经验, 可快速上手项目开发、掌握业务逻辑, 并从代码角度为项目提供最优方案。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 前端技术栈擅长Vue, 微信小程序, Layui, JQuery, uni-app, React, 擅长组件开发及构建优化。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 后端掌握Nodejs, Express 开发，数据库熟悉 MySQL。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 长期维护线上个人技术博客，能独立完成项目开发，前后端通调。</div>
            </div>
          </div>
          {/* 工作经验 */}
          <h1>工作经验</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>中国汽车技术研究中心有限公司（ 2020 年 09 月 ~ 至今 ）</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>基础研究部/软件研发室/共性技术组/Web前端开发工程师</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 负责小组日常前端开发、维护工作，参与项目需求研讨</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 根据客户需求，对接后端接口，定制化开发呈现页面效果</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 项目技术难点突破，承担前端核心功能开发</div>
            </div>
          </div>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>天津东方企业营销策划有限责任公司（ 2019 年 06 月 ~ 2020 年 09 月 ）</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>软件技术部/前端开发工程师</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 在理解产品需求的基础上，与设计、产品相关人员及时沟通，保证产品质量与开发进度。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 根据产品设计需求，利用相关技术开发PC端，快速实现页面布局，保证代码规范性。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 负责H5小程序方面新功能的编码、样式修改及bug修复，对前端页面持续优化，提升用户体验。</div>
            </div>
          </div>
          {/* 项目经验 */}
          <h1>项目经验</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>ADC智能信息化（ 2020 年 09 月 ~ 至今 ）</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>前端开发/维护</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>ADC智能信息化是一个供中国汽车技术研究中心有限公司内部成员使用的智能平台。</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}> <p>工作内容：</p> </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 参与项目需求研讨、项目架构、技术选型</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 负责快速构建高质量页面、对接处理数据、多端口适配、Bug修复</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}><p>功能难点：</p> </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 组件开发：自定义表单组件封装,(单行文本框、多行文本框、下拉菜单、单选框、复选框、文件上传、日期时间选择、组织机构选择、人员选择、列表控件、项目列表、科研列表、业务列表、Echarts自定义组件）等</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 复杂逻辑处理：多层嵌套菜单树的热渲染，复杂人物关系图谱的渲染、业务＞项目＞任务＞子任务对标层级人物权重，复杂关系处理，表单流程走动，启动项目后会对照自定义流程表单对标流程，权限填写，领导审批下款、扫码手机签字等</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 复杂数据处理：多维数组的数据去重、特定元素增删查改，全局数据维护</div>
            </div>
          </div>

          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>CAMDS 中国汽车材料数据系统（ 2021 年 06 月 ~ 2021 年 07 月 ）</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <p>前端开发/重构</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>CAMDS 中国汽车材料数据系统 是为了提高中国汽车材料回收利用率而开发的产品数据管理平台</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}><p>功能难点：</p> </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 由vue开发单页面官网，重构采用 Nuxt.js(ssr) 服务端渲染实现seo优化爬虫抓取</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 页面拆分，组件详细划分，路由采用动态路由实现文章分享功能</div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>- 复杂业务逻辑重新整理，封装复用组件，摒弃耦合代码</div>
            </div>
          </div>
        {/* 自我评价 */}
          <h1>自我评价</h1>
          <div className={styles.box_bg}>
            <div className={styles.row}>
              <div className={styles.col}>细节把握细致，性格外向开朗，敢于承担责任。</div>
            </div>
          </div>
        </div>
        {/* 底部备案号 */}
        <div>
          <p className={styles.bottomp}>
            © Tinkerbell | <a href="https://beian.miit.gov.cn">冀ICP备2021015986号-1</a>
          </p>
        </div>
        <Gotop />
        <GitHub />
        <DownLoad />
        {/* <Music /> */}
      </div>
    );
  }
}

export default withStyles(ResumesStyle)(Resumes);
