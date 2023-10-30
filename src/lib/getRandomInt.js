/*
**
 * Generate random int between min and max (both inclusive)
 *
 * @param max
 * @param min
 * @return number
 */
export const getRandomInt = (max, min) => Math.round(
    Math.random() * (max - min),
) + min
