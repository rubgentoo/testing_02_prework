export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function reversedString(str: string): string {
  return str.split('').reverse().join('')
}

export function getTotal(elements: number[]): number {
  return elements.reduce((ac, total) => (ac + total), 0)
}