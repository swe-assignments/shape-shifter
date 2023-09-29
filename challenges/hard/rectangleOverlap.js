/*
 * This is intended to be a challenge for any squad who gets finished with everything else.
 * If you haven't done the other challenges, try those first!
 *
 * Imagine you have two rectangles with horizontal bases. If you draw them on the same grid,
 * they would overlap! Each rectangle is described by an array of coordinates, for example:
 * [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]
 * Can you write a function which calculates the area of the overlap between two rectangles?
 *
 */

/**
 * Given the four corners of two rectangles, find the area of their overlap.
 * If they don't overlap, return 0.
 * @param {{x: number, y: number}[]} rectangle1 - The four corners of rectangle 1
 * @param {{x: number, y: number}[]} rectangle2 - The four corners of rectangle 2
 */
function rectangleOverlap(rectangle1, rectangle2) {
  const xOverlap = arrayOverlap(getX(rectangle1), getX(rectangle2))
  const yOverlap = arrayOverlap(getY(rectangle1), getY(rectangle2))
  return xOverlap * yOverlap
}

// Remove duplicate values from an array
function removeDuplicates(arr) {
  return [...new Set(arr)]
}

// Returns the x-coords of a rectangle as an array
function getX(rectangle) {
  return removeDuplicates(rectangle.map(vertex => vertex.x)).sort()
}

// Returns the y-coords of a rectangle as an array
function getY(rectangle) {
  return removeDuplicates(rectangle.map(vertex => vertex.y)).sort()
}

// Accepts two arrays of form [a, b] with a < b and calculates overlap
function arrayOverlap(arr1, arr2) {
  // sort arrays by size of first entry
  ;[arr1, arr2] = [arr1, arr2].sort((A, B) => A[0] - B[0])

  if (arr1[1] < arr2[0]) return 0
  if (arr2[1] < arr1[1]) return arr2[1] - arr2[0]
  return arr1[1] - arr2[0]
}

module.exports = rectangleOverlap
