import { ref, computed, ComputedRef } from 'vue';

export default function useLabelDivSetup() {
  const MOUSEX_DEFAULT = -1000;
  const mouseX = ref(MOUSEX_DEFAULT);

  const MOUSEY_DEFAULT = -1000;
  const mouseY = ref(MOUSEY_DEFAULT);

  const techYears = ref(0);
  const hideLabelDiv = ref(false);

  const updateMousePosition = (event: { x: number, y: number }) => {
    mouseX.value = event.x;
    mouseY.value = event.y;
  };

  const labelDivStyles: ComputedRef<{ left: string, top: string }> =
    computed(() => ({
      left: `${mouseX.value}px`,
      top: `${mouseY.value}px`,
    }));

  return {
    mouseX,
    mouseY,
    techYears,
    hideLabelDiv,
    updateMousePosition,
    labelDivStyles,
  };
}