<template>
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
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            default: []
        },
    },
}
