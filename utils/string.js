export const toKebab = string => string
  .split('')
  .map((letter, index) => {
    if (/[A-Z]/.test(letter)) {
      return ` ${letter.toLowerCase()}`
    }
    return letter
  })
  .join('')
  .trim()
  .replace(/[_\s]+/g, '-');

export const toCamel = (string) => toKebab(string)
  .split('-')
  .map((word, index) => {
    if (index === 0) return word
    return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
  })
  .join('');
