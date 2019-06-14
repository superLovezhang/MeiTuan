export default {
    path: '/Mine',
    component: () => import('@/views/Mine.vue'),
    beforeEnter: (to, from, next) => {
        if(window.localStorage.getItem('user')){
            next();
        }else{
            next({ path: '/Login' });
        }
    }
}