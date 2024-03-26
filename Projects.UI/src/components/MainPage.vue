<template>
  <PageHeader
    @start-search="startSearch()"
    @open-popup-alert="openModalAlert = true"
  />
  <PageBody :is-search="showSearch" />
  <PopupAlert 
    v-if="openModalAlert" 
    @close-popup-alert="openModalAlert= false"
  />
</template>

<script setup>
import PageHeader from '@/components/PageElements/Header/PageHeader.vue';
import PageBody from "@/components/PageElements/Body/PageBody.vue";
import PopupAlert from "@/components/PageElements/Popups/PopupAlert.vue";
import { ref } from 'vue';

const showSearch = ref(false)

const openModalAlert = ref(false)

const startSearch = () => {
  showSearch.value = true
}
</script>