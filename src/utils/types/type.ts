export interface Type<T> extends AbstractType<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
}

export interface AbstractType<T> {
  prototype: T;
}
