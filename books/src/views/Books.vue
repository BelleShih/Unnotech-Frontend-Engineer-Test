<template>
<b-container>
  <div class="box">
    <b-row class="flex-nowrap row">
        <b-col sm="12" md="6" lg="4" class="w-100 col" v-for="book in books" :value="book" :key="book.id">
          <b-btn @click="Book(book)" variant="link">
            <b-card :title="book.name" :img-src="book.image" class="h-100 img">
            </b-card>
          </b-btn>
        </b-col>
    </b-row>
  </div>
</b-container>
</template>

<script>
import '@/assets/css/app.scss'
export default {
  name: 'Books',
  data () {
    return {
      books: []
    }
  },
  methods: {
    Book (item) {
      this.$router.push('/books/' + item.id)
    }
  },
  mounted () {
    this.axios.get('https://fe-interview-api.unnotech.com/books')
      .then(res => {
        this.books = res.data
      })
  }
}
</script>
