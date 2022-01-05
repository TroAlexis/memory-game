import { readonly, ref, Ref } from 'vue';

export const GRIDS = {
  SIXTEEN: 16,
  THIRTY_SIX: 36,
} as const;

type GridKeys = keyof typeof GRIDS;
type Grid = typeof GRIDS[GridKeys];
type GridRef = Ref<Grid>;

export interface GridComposable {
  grid: Readonly<GridRef>,
  setGrid: (newGrid: Grid) => void,
}

const grid: GridRef = ref(GRIDS.SIXTEEN);

export default function useGrid(): GridComposable {
  const setGrid: GridComposable['setGrid'] = (newGrid) => {
    grid.value = newGrid;
  };

  return {
    grid: readonly(grid),
    setGrid,
  };
}
