import { isEven } from "@wfs/is-even";

export function isOdd(i: number): boolean {
  return isEven(i) === false;
}
