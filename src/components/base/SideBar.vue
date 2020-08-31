<template>
    <v-navigation-drawer v-model="drawer" color="blue" mini-variant absolute expand-on-hover>
        <v-list dense nav class="py-0">
            <v-list-item v-for="item in menuOptions" :key="item.title" link>
                <v-list-item-icon class="p2">
                    <v-icon color="white">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title style="color:white;">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        menuOptions:{
            type: Array,
            required: true
        }
    },
    data(){
        return {
            drawer: true,
        }
    }
};
</script>

<style>
</style>