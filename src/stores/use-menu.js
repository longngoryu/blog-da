import { defineStore } from 'pinia'

export const useMenu = defineStore('MenuId', {
  state: () => ({
    selectedKeys: [],
    openKeys: [],
  }),

  actions:{
    onSelectedKeys(data){
        this.selectedKeys = data;
    },
    onOpenkeys(data){
        this.openKeys = data;
    }
  }
});