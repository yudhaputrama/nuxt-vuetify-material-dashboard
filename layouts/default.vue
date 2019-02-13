<template>
  <v-app>
      <core-filter />

      <core-toolbar />

      <core-drawer />

      <core-view />
    </v-app>
</template>

<script>
import CoreDrawer from '@/components/core/Drawer'
import CoreFilter from '@/components/core/Filter'
import CoreToolbar from '@/components/core/Toolbar'
import CoreView from '@/components/core/View'
export default {
  components: {
    'core-filter': CoreFilter,
    'core-drawer': CoreDrawer,
    'core-toolbar': CoreToolbar,
    'core-view': CoreView
  }
}
</script>

<style lang="sass">

</style>
