<template>
  <div class="box">
    <b-row class="flex-nowrap">
      <b-col sm="12" md="6" lg="4" class="w-100 col" v-for="book in books" :value="book" :key="book.id">
        <b-button @click="Book(book)" variant="link" class="btn">
          <b-card :title="book.name" :img-src="book.image" class="h-100 img">
          </b-card>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data () {
    return {
      books: [],
      id: 0
    }
  },
  methods: {
    Book (item) {
      this.id = item.id
      this.$store.commit('Book', item)
      this.$router.push('/books/' + item.id).catch(() => {})
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
