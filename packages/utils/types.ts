export type Arrayable<T> = T | T[]
export type Awaitable<T> = T | Promise<T>
export type Callable<T> = T | (() => T)
export type Nullable<T> = T | null
export type Writable<T> = { -readonly [P in keyof T]: T[P] }
