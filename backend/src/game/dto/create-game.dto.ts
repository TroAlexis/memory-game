import { ArrayNotEmpty, IsNumber } from 'class-validator';
import { Card } from '../../types/game.types';

export class CreateGameDto {
  @IsNumber()
  gridSize: number;

  @IsNumber()
  playersNumber: number;

  @ArrayNotEmpty()
  cards: Card[];
}
