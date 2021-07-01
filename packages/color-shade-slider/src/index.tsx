import React from 'react';
import { hsvaToHslaString } from '@uiw/color-convert';
import Alpha, { ColorAlphaProps } from '@uiw/react-color-alpha';

export interface ColorShadeSliderProps extends Omit<ColorAlphaProps, 'onChange'> {
  onChange?: (newShade: { v: number; s: number }) => void;
}

export default React.forwardRef<HTMLDivElement, ColorShadeSliderProps>((props, ref) => {
  const { onChange, direction = 'horizontal', hsva, ...other } = props;
  const colorFrom = hsvaToHslaString(Object.assign({}, hsva, { a: 1, s: 100, v: 100 }));
  return (
    <Alpha
      ref={ref}
      {...other}
      hsva={{ h: hsva.h, s: 100, v: hsva.v, a: hsva.v / 100 }}
      direction={direction}
      background={`linear-gradient(to ${direction === 'horizontal' ? 'right' : 'bottom'}, ${colorFrom}, rgb(0, 0, 0))`}
      onChange={(_, interaction) => {
        onChange && onChange({ v: direction === 'horizontal' ? interaction.left * 100 : interaction.top * 100, s: 100 });
      }}
    />
  );
});