import { defineStore } from "pinia";
export const useStore = defineStore("store", () => {
    const loader = ref(false);
    const errorMessage = ref(false);
    const message = ref(false);
    const haveInfo = ref(false);
    return {
        loader, message, errorMessage,haveInfo
    }
})