export type IColor = {
  color: string;
  font_color: string;
};

export interface IEventColor {
  event: MouseEvent;
  color: IColor;
}
