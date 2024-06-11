<script setup lang="ts">
import VButton from "@/components/VButton.vue";
import {useAudioRecorder} from "@/composables/useAudioRecorder.ts";

const {audioLink, recording, stopRecorder, startRecording} = useAudioRecorder();

const clickHandler = () => {
  console.log(recording.value)
  if (recording.value) stopRecorder();
  else startRecording();
}
</script>

<template>
  <h1> Audio recorder </h1>

  <div class="visualizer">
    <audio v-if="audioLink && !recording" :src="audioLink" controls/>

    <div v-if="recording" class="start-talk">
      Говорите ...
    </div>
  </div>


  <v-button @click="clickHandler">
    {{ recording ? 'Остановить' : 'Начать запись' }}
  </v-button>
</template>

<style scoped>
.start-talk {
  text-align: center;
  font-size: 2rem;
}
.visualizer {
  min-height: 30rem;
  border: 2px solid var(--primary-color);
  width: 100%;
  max-width: 60rem;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
