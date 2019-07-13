export function toSeconds(min: string, sec: string) {
  return parseInt(min || "0") * 60 + parseInt(sec || "0");
}

export function toMinSecArray(sec: number): string[] {
  const m: number = Math.floor(sec / 60);
  const s: number = sec % 60;
  const strMin = ("00" + m).slice(-2);
  const strSec = ("00" + s).slice(-2);
  return [strMin, strSec];
}
