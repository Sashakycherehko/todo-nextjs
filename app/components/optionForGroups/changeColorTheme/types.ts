export type IColor = {
  Backgroundcolor: string;
  font_color: string;
};

export interface IEventColor {
  event: MouseEvent;
  color: IColor;
}
