import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export type ItemValue = string | number;
export class Item {
  @prop()
  value: ItemValue;
}

export class Player {
  @prop()
  name: string;

  @prop()
  score: number;
}

export class Game extends TimeStamps {
  @prop({ type: () => [Item] })
  items: Item[];

  @prop({ type: () => [Number] })
  itemsMap: Record<ItemValue, number>;

  @prop({ type: () => [Player] })
  players: Player[];
}
