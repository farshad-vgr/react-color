React Shade Slider
===

## Install

```bash
npm i @uiw/react-color-shade-slider
```

## Usage

```js
import ShadeSlider from '@uiw/react-color-shade-slider';

function Demo() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <ShadeSlider
      hsva={hsva}
      onChange={(newShade) => {
        setHsva({ ...hsva, ...newShade });
      }}
    />
  );
}
```

## Props

```ts
import { ColorAlphaProps } from '@uiw/react-color-alpha';

interface ColorShadeSliderProps extends Omit<ColorAlphaProps, 'onChange'> {
  onChange?: (newShade: { v: number, s: number }) => void;
}
```