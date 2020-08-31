<template>
    <div>
        <page-title :title="'Dashboard Lista de tarefas'"></page-title>

        <v-card>
            <v-card-text>
                <v-row>
                    <v-col>
                        <add-task-form v-if="isActiveAddTaskForm"></add-task-form>
                        <tasks-list></tasks-list>
                    </v-col>
                    
                </v-row>
            </v-card-text>
            <v-card-actions v-if="!isActiveAddTaskForm">
                <v-btn @click="activeAddTask" small color="primary">Criar Nova Tarefa</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>

import TasksListBox from "@/components/tasks/TasksListBox";
import AddTaskForm from "../../components/tasks/AddTaskForm.vue";
import PageTitle from "../../components/base/PageTitle.vue";

import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {

        };
    },
    components: {
        "tasks-list": TasksListBox,
        "add-task-form": AddTaskForm,
        "page-title": PageTitle
    },
    computed:{
      ...mapState(["isActiveAddTaskForm"]),
    },
    methods: {
        ...mapActions(["loadTaskslist","cleanTasksList", "activeAddTaskForm"]),

        loadTasks() {
            this.loadTaskslist();
        },

        activeAddTask() {
            this.activeAddTaskForm()
        },
    },
    created() {
        this.loadTasks();
    },
};
</script>

<style>
</style>