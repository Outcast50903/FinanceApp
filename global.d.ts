/// <reference types="nativewind/types" />

type EmptyFunc = (...args: unknown[]) => void;

export type Tron = {
  log: EmptyFunc;
  error: EmptyFunc;
  warn: EmptyFunc;
  display: EmptyFunc;
  createSagaMonitor: unknown;
  createEnhancer: unknown;
};

declare global {
  interface Console {
    tron: Tron;
  }
}
