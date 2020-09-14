<template>
  <div class="board py-2 px-5 antialiased select-none">
    <div
      class="flex whitespace-no-wrap h-full inset-0 absolute overflow-y-hidden overflow-x-scroll  items-start justify-start"
    >
      <div class="column" v-for="(column, index) of board.columns" :key="index">
        <div
          class="flex justify-between items-center mb-4 font-medium relative"
        >
          <div>{{ column.name }}</div>
          <button type="button" @click="colorPlateToggle(index)">
            <svg
              class="w-6 h-6 text-cobalt-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
              ></path>
            </svg>
          </button>
          <ColorPlate v-show="isbackgroundDropDown"></ColorPlate>
        </div>
        <div class="list-reset">
          <div
            class="task px-2 flex my-2 bg-white py-2 font-normal shadow rounded text-gray-800 capitalize"
            v-for="task in column.tasks"
            :key="task.uuid"
          >
            {{ task.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ColorPlate from "../components/ColorPlate";
export default {
  components: { ColorPlate },
  data() {
    return {
      isbackgroundDropDown: false
    };
  },
  computed: mapState(["board"]),
  methods: {
    colorPlateToggle(id) {
      console.log(id);
      this.isbackgroundDropDown = !this.isbackgroundDropDown;
    }
  }
};
</script>

<style>
.board {
  @apply bg-cobalt-400 py-2 h-full;
}
.column {
  @apply bg-gray-200 py-2 px-5 mr-4 shadow text-gray-900 font-bold rounded mb-2;
  min-width: 350px;
  width: 300px;
}
</style>
