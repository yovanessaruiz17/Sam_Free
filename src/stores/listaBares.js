import { defineStore } from 'pinia'
export const useListaBares= defineStore('ListaBares',{
    state:()=>({
        listaBar:[]
    }),
    getters:{
        getlistaBar (state){
            return state.listaBar
        }
    },
    
})