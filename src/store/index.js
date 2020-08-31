import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '@/plugins/firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    isActiveAddTaskForm: false,
  },
  mutations: {
    setActiveAddTaskForm(state, status){
      state.isActiveAddTaskForm = status
    },
    setTaskslist (state, newTasksList) {
      state.tasks = newTasksList     
    },
    addTaskToList(state, newTask){
      state.tasks.push(newTask)
    }

  },
  actions: {
    cleanTasksList({commit}){
      commit('setTaskslist', [])

    },
    activeAddTaskForm({commit}){
      commit('setActiveAddTaskForm',true)
    },
    unactiveAddTaskForm({commit}){
      commit('setActiveAddTaskForm',false)
    },
    loadTaskslist ({ commit }) {
      const tasksList = []
      db.collection('tasks').get().then(querySnapshot => {
        querySnapshot.forEach(resp => {
          tasksList.push({ id: resp.id, ...resp.data()})
        })
      })
    //   db.collection("cities").get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });
    
      commit('setTaskslist', tasksList)
    },
    createNewTask({ commit }, {name,description}){
      db.collection("tasks").add({
        name,
        description,
        status: false
      })
      
      commit
    },

    updateTaskStatus({ commit }, {id, status}){
      db.collection("tasks").doc(id).update({
        status: status
      });
      
      commit
    }

  },
  modules: {
  }
})
