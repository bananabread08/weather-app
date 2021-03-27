export default function convertUnits(temperature) {
  const temp = temperature - 273.15;
  return temp.toFixed(1);
}
