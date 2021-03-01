<template>
<b-container>
  <keep-alive>
    <item></item>
  </keep-alive>
</b-container>
</template>

<script>
import '@/assets/css/app.scss'
import item from '@/components/item.vue'

export default {
  name: 'Books',
  data () {
    return {
    }
  },
  components: {
    item
  },
  mounted () {
    // this.id = this.$route.params.id
  }
}
</script>
