<template>
  <div class="books">
    <h1>This is an books page</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      books: []
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
