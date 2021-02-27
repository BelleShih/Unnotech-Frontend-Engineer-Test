<template>
  <b-container>
    <keep-alive>
      <item></item>
    </keep-alive>
    <b-collapse id="collapse-2">
      <b-card>I am collapsible content!</b-card>
    </b-collapse>
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
  },
  computed: {
    
  }
  // mounted () {
  //   this.id = this.$route.params.id
  // }
}
</script>
