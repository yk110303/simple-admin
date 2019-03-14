<template>
  <section class="container">
    <div>
      <h1>usersのindexページです。</h1>
      <p>count={{count}}</p>
      <button @click="addCount">カウントアップ</button>
      <a
        href="/site"
        class="button--green">site</a>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'default',
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    }
  }
}
</script>
