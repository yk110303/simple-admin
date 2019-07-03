<template>
  <section class="container">
    <div>
      <h1>プロジェクト</h1>
      <div class="table">
          <table>
            <tr>
                <th class="th-width-rate-60">id</th>
                <th>プロジェクト名</th>
            </tr>
            <tr v-for="(project, index) in projects" :key="index">
                <td>{{ project.id }}</td>
                <td>{{ project.name }}</td>
            </tr>
          </table>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

// import projectTable from '../components/project/Table.vue'

export default {
  layout: 'default',

  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('http://localhost:7000/api/Projects')
      .then((res) => {
        console.log(res);
        return { projects: res.data.slice(0, 5) }
      })
  },

  data() {
    return {
      projects: {
        data: [],
      }
    }
  },
  components: {
    // projectTable,
  },

  computed: {
  },
  methods: {
    ...mapActions([
        'fetchProjects',
    ]),
    addProjects (e) {

    }
  },
  async mounted () {
      // this.isLoading = true
      // const fetchedTagsStatus = await this.fetchTags()
      // this.isLoading = false

      // if (fetchedTagsStatus == 'error') {
      // }
  }
}
</script>
