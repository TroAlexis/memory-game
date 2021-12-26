import { onMounted, ref, Ref } from 'vue';

type Animated = Ref<boolean>
type useAnimatedOnMountComposable = {
  animated: Animated,
}
export default function useAnimatedOnMount(shouldAnimate = true): useAnimatedOnMountComposable {
  const animated: Animated = ref(false);

  onMounted(() => {
    if (shouldAnimate) {
      animated.value = true;
    }
  });

  return {
    animated,
  };
}
