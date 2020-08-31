<template>
    <v-container id="base">
        
        <side-bar :menuOptions="items"></side-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-container>
</template>

<script>
import SideBar from "@/components/base/SideBar.vue"

export default {
    data() {
        return {
            items: [
                { title: "Ver tarefas", icon: "mdi-check" },
                { title: "Editar tarefas", icon: "mdi-pencil" },
                //{ title: "About", icon: "mdi-help-box" },
            ],
        };
    },
    components:{
        "side-bar": SideBar
    }
};
</script>

<style lang="scss">
</style>
