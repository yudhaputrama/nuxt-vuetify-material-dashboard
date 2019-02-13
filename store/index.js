import Vuex from 'vuex'
import { set, toggle } from '@/utils/vuex'

const createStore = () => {
    return new Vuex.Store({
        store: {
            drawer: null,
            color: 'success',
            image: 'https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg'
        },
        mutations: {
            setDrawer: set('drawer'),
            setImage: set('image'),
            setColor: set('color'),
            toggleDrawer: toggle('drawer')
        }
    })
}


export default createStore