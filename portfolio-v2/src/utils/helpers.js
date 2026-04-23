export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
