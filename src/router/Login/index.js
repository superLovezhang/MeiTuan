export default {
    path: '/Login',
    component: ()=> import('@/views/Login.vue'),
    children:[
        {
            path:'',
            redirect: 'account'
        },
        {
            path: 'account',
            component: ()=> import('@/components/LoginAccount.vue')
        },
        {
            path: 'verificate',
            component: ()=> import('@/components/LoginVerificate.vue')
        }
    ]
}