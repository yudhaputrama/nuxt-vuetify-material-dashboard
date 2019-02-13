import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import theme from './theme'

Vue.use(Vuetify, {
  iconFont: 'mdi',
  theme
})

// import CoreDrawer from '@/components/core/Drawer'
// import CoreFilter from '@/components/core/Filter'
// import CoreFooter from '@/components/core/Footer'
// import CoreToolbar from '@/components/core/Toolbar'
// import CoreView from '@/components/core/View'
// import HelperOffset from '@/components/helper/offset'
// import MaterialCard from '@/components/material/Card'
// import MaterialChartCard from '@/components/material/ChartCard'
// import MaterialNotification from '@/components/material/Notification'
// import MaterialStatsCard from '@/components/material/StatsCard'

// Vue.component(CoreDrawer)
// Vue.component(CoreFilter)
// Vue.component(CoreFooter)
// Vue.component(CoreToolbar)
// Vue.component(CoreView)
// Vue.component(HelperOffset)
// Vue.component(MaterialCard)
// Vue.component(MaterialChartCard)
// Vue.component(MaterialNotification)
// Vue.component(MaterialStatsCard)