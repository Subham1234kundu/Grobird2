export {};

declare global {
  interface Window {
    /** Set once the landing-page loader has finished its exit. */
    __grobirdLoaded?: boolean;
  }
}
