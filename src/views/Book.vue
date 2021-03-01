<template>
  <b-container>
    <keep-alive>
      <item></item>
    </keep-alive>
    <!-- <b-row id="amount"></b-row> -->
  </b-container>
</template>

<script>
import '@/assets/css/app.scss'
import item from '@/components/item.vue'

export default {
  name: 'Book',
  data () {
    return {
    }
  },
  components: {
    item
  }
}
</script>
