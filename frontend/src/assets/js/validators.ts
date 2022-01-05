type UnknownArray = unknown[] | readonly unknown[];
type ValidatorFunction = (value: unknown) => boolean;
type ValidatingFunction = (value: unknown, ...args: any[]) => boolean

export function isOneOf(value: unknown, arr: UnknownArray): boolean {
  return arr.includes(value);
}

export function getValidator(fn: ValidatingFunction, ...args: any[]): ValidatorFunction {
  return (value) => fn(value, ...args);
}

export function validatorIsOneOf(arr: UnknownArray): ValidatorFunction {
  return getValidator(isOneOf, arr);
}
