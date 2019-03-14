// export const getters = {
//     filterProjects: (state) => (queryValues) => {
//         let projects = state.projects
//
//         if (queryValues.name) {
//             projects = projects.filter((project) => {
//                 return project.name.indexOf(queryValues.name) !== -1
//             })
//         }
//
//         const length = Object.keys(projects).length
//         if (length === 0) {
//             return null
//         }
//         return tags
//     },
//     getTagByKey: (state) => (key) => {
//         const project = state.projects.find(project => project.key === key)
//         return project
//     },
// }
