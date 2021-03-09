/*
 * @Author: your name
 * @Date: 2021-03-05 16:36:31
 * @LastEditTime: 2021-03-09 08:48:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /blogreact/src/router/router.tsx
 */
import Home from '../views/Home/Home';
// import Details from '../views/Details/Details';
import Details from '../views/Details/Details'
// import Comments from '../views/Comments/Comments';
// import Cv from '../views/Cv/Cv';
// import NoMatch from '../views/NoMatch/NoMatch';

const routers = [{
  path:'/',
  exact: true,
  component: Home
},
{
  path:'/Details',
  exact: false,
  component: Details
},
// {
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