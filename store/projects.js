import axios from 'axios'

export const state = () => ({
  project: []
})

export const actions = {
    async fetchProjects (context) {
        try {
            const response = await axios.get('http://localhost:7000/Projects')
            console.log(response);
            context.commit('setProjects', response.data)
            return 'success'
        } catch (error) {
            console.log(error)
            return 'error'
        }
    },

//     async putProject (context, project) {
//         try {
//             await axios.put('http://localhost:7000/Projects', {
//                 tagName: tagName
//             })
//             const response = await axios.get('/api/tags')
//             context.commit('setTags', response.data)
//             return 'success'
//         } catch (error) {
//             console.log(error)
//             return 'error'
//         }
//     },
//
//     async patchProject (context, project) {
//         try {
//             await axios.patch('/api/tags', {
//                 tagName: tagName
//             })
//             const response = await axios.get('http://localhost:7000/Projects/${project->id}')
//             context.commit('setTags', response.data)
//             return 'success'
//         } catch (error) {
//             console.log(error)
//             return 'error'
//         }
//     },
//
//     async deleteTagRequest (context, projectId) {
//         try {
//             await axios.delete(`http://localhost:7000/Projects/${projectId}`)
//             const response = await axios.get('/api/tags')
//             context.commit('setTags', response.data)
//             return 'success'
//         } catch (error) {
//             console.log(error)
//             return 'error'
//         }
//     }
}

export const getters = {
  filterProjects: (state) => {
      return projects
  },

    // filterProjects: (state) => (queryValues) => {
    //     let projects = state.projects
    //
    //     if (queryValues.name) {
    //         projects = projects.filter((project) => {
    //             return project.name.indexOf(queryValues.name) !== -1
    //         })
    //     }
    //
    //     const length = Object.keys(projects).length
    //     if (length === 0) {
    //         return null
    //     }
    //     return tags
    // },
    // getTagByKey: (state) => (key) => {
    //     const project = state.projects.find(project => project.key === key)
    //     return project
    // },
}

export const mutations = {
    setProjects (state, projects) {
        state.projects = projects
    },
}
