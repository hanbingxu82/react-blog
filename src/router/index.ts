/*
 * @Author: your name
 * @Date: 2021-03-05 16:36:31
 * @LastEditTime: 2021-03-05 16:37:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/router/router.tsx
 */
import Home from '../views/Home/Home';
// import Detail from '../containers/Detail/Detail';
// import Comments from '../containers/Comments/Comments';
// import Cv from '../containers/Cv/Cv';
// import NoMatch from '../containers/NoMatch/NoMatch';

const routers = [{
  path:'/',
  exact: true,
  component: Home
},
// {
//   path:'/detail',
//   exact: false,
//   component: Detail
// },{
//   path:'/comments',
//   exact: false,
//   component: Comments
// },{
//   path:'/cv',
//   exact: false,
//   component: Cv
// },{
//   path: '',
//   exact: false,
//   component: NoMatch
// }
];
export default routers;