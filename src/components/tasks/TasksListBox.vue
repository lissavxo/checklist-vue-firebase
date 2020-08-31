<template>
    <v-row>
        <v-col>
            <v-col>
                <h3>Tarefas Feitas</h3>
            </v-col>
            <v-col v-for="task in completedTasks" :key="task.name">
                <task-box
                    :name="task.name"
                    :description="task.description"
                    :id="task.id"
                    :status="task.status" />
            </v-col>

        </v-col>
        <v-col>
            <h3> Por fazer</h3>
            <v-checkbox
            v-for="task in TodoTasks" :key="task.name"
            v-model="task.status" 
            :label="task.name"
            @change="updateTaskStatus({id:task.id, status:task.status})" />
        </v-col>
    </v-row>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import TaskBox from '@/components/tasks/TaskBox'
export default {
    props:{
        title:{
            type:String,
            default: "Minhas Tarefas"
        }
    },
    components: {
        'task-box': TaskBox
    },
    data(){
        return {
            
        }
    },
    computed: {
        ...mapState(["tasks"]),
        completedTasks(){
            return this.tasks.filter((task) => task.status)
        },
        TodoTasks(){
            return this.tasks.filter((task) => !task.status)
        }
    },
    methods:{
        ...mapActions(['updateTaskStatus'])
    }
    
};
</script>

<style>
</style>