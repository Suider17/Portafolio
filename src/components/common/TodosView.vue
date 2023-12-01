<script setup>
import { reactive } from "vue";
import InpuTNew from "./InpuTNew.vue";

const boards = reactive([
  {
    id: crypto.randomUUID(),
    name: "tablero 1",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Titulo de prueba",
      },
      {
        id: crypto.randomUUID(),
        title: "Segundo de prueba",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "tablero 2",
    items: [
      {
        id: crypto.randomUUID(),
        title: "Titulo de prueba",
      },
      {
        id: crypto.randomUUID(),
        title: "Segundo de prueba",
      },
    ],
  },
]);

const handleNewItem = (text) => console.log(text.value);
</script>

<template>
  <div>
    <button>Crear nueva tabla</button>
  </div>

  <div class="boards-container">
    <div class="boards">
      <div class="board" v-for="board in boards" :key="board.id">
        <div>{{ board.name }}</div>
        <InpuTNew
          @on-new-item="(text) => handleNewItem(text, board)"
        ></InpuTNew>
        <div class="items">
          <div class="item" v-for="item in board.items" :key="item.id">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boards {
  display: flex;
  gap: 10px;
}

.boards {
  background: #efefee;
  padding: 10px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item {
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
}
</style>
