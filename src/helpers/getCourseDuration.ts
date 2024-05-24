export function getCourseDuration(time: number): string {
  let hh = Math.floor(time / 60);
  let mm = time % 60;
  let hours: string = hh < 10 ? "0" + hh : hh.toString();
  let minutes: string = mm < 10 ? "0" + mm : mm.toString();

  return `${hours}:${minutes} hours`;
}
