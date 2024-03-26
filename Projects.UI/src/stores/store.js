import { defineStore } from 'pinia';
import { ref } from 'vue';
import ApiQueries from '@/API/api';

export const useStore = defineStore('store', () => {
    const projects = ref([]);

    const foundSubject = async (searchText) => {
        try {
            const response = await ApiQueries.searchSubject(searchText);
            projects.value = response.items;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        projects,
        foundSubject
    };
});
