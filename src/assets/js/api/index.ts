import { Game } from '@/assets/js/api/types';

export default {
  startGame(): Promise<Game> {
    // TODO Api game method
    return new Promise<Game>((resolve) => resolve({
      id: '1',
    }));
  },
};
