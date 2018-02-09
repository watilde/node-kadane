const kadane = require('./')
const inputs = {
  '6': [1, 2, 3],
  '1': [-1, 1, -1],
  '-1': [-1, -2, -3]
}

Object.keys(inputs).forEach((max) => {
  const list = inputs[max]
  const result = kadane(list)
  if (result != max) throw new Error('?')
})
