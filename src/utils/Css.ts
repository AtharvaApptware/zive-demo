/**
 * Returns a string after joining all the class name
 *
 * for ex., 1. `classNames("btn btn-primary disabled")` => `"btn btn-primary disabled"`
 *
 * @param   {any[]} classes  Takes array string of class names
 * @returns {string}          return string of class names
 */
export const getClassNames = (...classes: Array<string | null | undefined | boolean>) => {
  return classes.filter(Boolean).join(' ');
};
