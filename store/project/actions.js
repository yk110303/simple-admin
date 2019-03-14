// export const actions = {
//     async fetchProjects (context) {
//         try {
//             const response = await axios.get('http://localhost:7000/Projects')
//             context.commit('setTags', response.data)
//             return 'success'
//         } catch (error) {
//             console.log(error)
//             return 'error'
//         }
//     },
//
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
// }
