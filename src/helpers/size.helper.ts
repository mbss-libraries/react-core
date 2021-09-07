export function RFValue(fontSize: number, deviceHeight: number, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

export const UIScale = (size: number, deviceHeight: number, options?: { min?: number; max?: number }) => {
  const { min, max } = options ?? { min: size };
  const scale = RFValue(size, deviceHeight);

  if (min && scale < min) return min;
  if (max && scale > max) return max;
  return scale;
};
