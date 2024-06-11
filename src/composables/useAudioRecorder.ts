import {ref} from "vue";

export const useAudioRecorder = () => {
  const audioLink = ref<string>("");
  const recording = ref<boolean>(false);
  const recorder = ref<MediaRecorder>();
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio: true});
      recorder.value = new MediaRecorder(stream);

      recording.value = true;
      recorder.value?.start();
    }
    catch (e) {
      console.log(navigator.permissions)
    }
  }

  const stopRecorder = () => {
    if (!recorder.value) return;
    recording.value = false;
    console.log(recorder.value)
    recorder.value?.stop();
    recorder.value.ondataavailable = (event) => {
      audioLink.value = URL.createObjectURL(event.data);
    }
  }

  return {
    audioLink,
    recording,
    startRecording,
    stopRecorder,
  }
}
