import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import PayDefeat from '@/pages/PayDefeat'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import WoDeDiZhi from '@/pages/Center/wodedizhi'
export default
    [
        {
            path: '/center',
            component: Center,
            children: [
                {
                    path: 'myorder',
                    component: MyOrder
                },
                {
                    path: 'wodedizhi',
                    component: WoDeDiZhi
                },
                {
                    path:'/center',
                    redirect:'/center/myorder'
                }
            ]
        },
        {
            path: '/paysuccess',
            component: PaySuccess,

            // beforeEnter(to, from, next) {
            //     if (from.path === '/pay') {
            //         next()
            //     } else {
            //         next('/pay')
            //     }
            // }
        },
        {
            path: '/paydefeat',
            component: PayDefeat,

            beforeEnter(to, from, next) {
                if (from.path === '/paysuccess') {
                    next()
                } else {
                    next('/home')
                }
            }
        },
        {
            path: '/pay',
            component: Pay,

            props: route => ({ orderId: route.query.orderId }),

            /* 只能从交易界面, 才能跳转到支付界面 */
            beforeEnter(to, from, next) {
                if (from.path === '/trade') {
                    next()
                } else {
                    next('/trade')
                }
            }
        },
        {
            path: '/trade',
            component: Trade,

            beforeEnter(to, from, next) {
                if (from.path === '/shopcart') {
                    next()
                } else {
                    next('/shopcart')
                }
            }
        },
        {
            path: '/shopcart',
            component: ShopCart
        },
        {
            path: '/addcartsuccess',
            name: 'addcartsuccess',
            component: AddCartSuccess,
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: "search"
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            name: "detail",
            path: '/detail/:id',
            component: Detail,
        },
        {
            //重定向
            path: '*',
            redirect: '/home'
        }
    ]
