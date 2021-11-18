import { readonly, ref, Ref } from 'vue';

export const PLAYERS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
} as const;

type PlayerKeys = keyof typeof PLAYERS;
type Players = typeof PLAYERS[PlayerKeys];
type PlayersRef = Ref<Players>;

export interface PlayersComposable {
  players: Readonly<PlayersRef>,
  setPlayers: (newPlayers: Players) => void,
}

const players: PlayersRef = ref(PLAYERS.ONE);

export default function usePlayers(): PlayersComposable {
  const setPlayers: PlayersComposable['setPlayers'] = (newPlayers) => {
    players.value = newPlayers;
  };

  return {
    players: readonly(players),
    setPlayers,
  };
}
