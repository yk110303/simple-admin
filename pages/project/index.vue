<template>
  <section class="container">
    <div>
      <h1>プロジェクト</h1>

      <a
        href="/users"
        class="button--green">users</a>
    </div>
  </section>
</template>

<script>


export default {
  layout: 'default',
  components: {

  },
  computed: {
    projects () { return this.$store.state.counter.count }
  },
  methods: {
  }
}
</script>
