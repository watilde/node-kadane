const kadane = (list) => {
  if (list.every(n => n > 0)) return list.reduce((a, b) => a + b, 0)
  if (list.every(n => n < 0)) return Math.max.apply(null, list)

  let max = list[0]
  let current = list[0]
  list.forEach((item) => {
    current += item
    if (0 > current) current = 0
    if (current > max) max = current
  })
  return max
}

module.exports = kadane
