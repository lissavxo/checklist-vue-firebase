<template>
<div class="task-box">
    <div class="task-box-info" >
        <div>
            <h3>{{name}}</h3>
        </div>
        <div>
            <h4>{{description}}</h4>
        </div>
    </div>
    <div style="">
        <v-checkbox
            v-model="status" 
            @change="handleUpdateTaskStatus({id:id, status:status})" />
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        name: {
            type: String,
            required: true
        },
        status:{
            type: Boolean,
            required: true
        },
        id:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    },
    methods:{
        ...mapActions(['updateTaskStatus', 'loadTasksList']),
        handleUpdateTaskStatus({id, status}){
            this.updateTaskStatus({id, status});
            this.loadTasksList();
        }


    }
}
</script>

<style lang="scss" >
.task-box{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    border: outset 1px;
    border-radius: 5px;
    & h3 {
        font-weight: normal;
    }

    & h4 {
        font-weight: normal;
    }
    .task-box-info{
        display: flex;
        flex-direction: column;
        align-self: center;
        flex-basis: 90%;
    }
}
</style>