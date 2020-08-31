<template>
    <div>
        <v-alert v-if="notifyAddTask" :type="notifyAddTaskStatus">{{ notifyMessage}}</v-alert>
        <v-row>
            <v-col>
                <v-text-field
                    dense
                    filled
                    v-model="newTaskName"
                    :rules="[rules.required]"
                    label="Nome"
                />
            </v-col>
            <v-col>
                <v-text-field dense filled v-model="taskDescription" label="Descrição" />
            </v-col>
            <v-col>
                <v-btn @click="addTask" color="primary" small>Salvar</v-btn>
                <v-btn @click="unactiveAddTaskForm" color="warning" small>Sair</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            newTaskName: "",
            taskDescription: "",
            notifyAddTask: false,
            notifyAddTaskStatus: "",
            notifyMessage: "",

            rules: {
                required: (value) => !!value || "Required.",
            },
        };
    },
    methods: {
        ...mapActions([
            "createNewTask",
            "cleanTasksList",
            "unactiveAddTaskForm",
            "loadTaskslist",
        ]),
        notify() {
            const startNotifyTimer = setTimeout(() => {
                this.notifyAddTask = false;
            }, 4000);
            return {
                erro: (message) => {
                    (this.notifyMessage = message),
                        (this.notifyAddTaskStatus = "error");
                    this.notifyAddTask = true;
                    startNotifyTimer;
                },
                sucess: (message) => {
                    (this.notifyMessage = message),
                        (this.notifyAddTaskStatus = "success");
                    this.notifyAddTask = true;
                    startNotifyTimer;
                },
            };
        },
        clearForm() {
            this.taskDescription = "";
            this.newTaskName = "";
            this.rules.required = true;
        },
        addTask() {
            if (this.newTaskName == "") {
                this.notify().erro(
                    "Voce precisa colocar um nome na sua tarefa!"
                );
                return;
            }
            this.cleanTasksList();
            this.createNewTask({
                name: this.newTaskName,
                description: this.taskDescription,
            });
            this.notify().sucess("Tarefa cadastrada com sucesso!");
            this.clearForm();
            this.loadTaskslist();
 
        },
    },
};
</script>

<style>
</style>