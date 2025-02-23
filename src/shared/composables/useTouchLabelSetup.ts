import { onMounted, ref } from 'vue';

export default function useTouchLabelSetup() {
  const showTouchLabel = ref(false);

  onMounted(() => {
    showTouchLabel.value = window.ontouchstart !== undefined;
  });

  return { showTouchLabel };
};
