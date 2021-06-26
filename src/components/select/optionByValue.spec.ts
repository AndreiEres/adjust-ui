import { optionByValue } from './optionByValue'

describe('optionByValue', () => {
  const oneOption = { value: 'one', label: 'One' }
  const flatOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ]
  const groupedOptions = [
    { options: [{ value: 'one', label: 'One' }] },
    { options: [{ value: 'two', label: 'Two' }] },
  ]

  it('returns option from flat list', () => {
    expect(optionByValue('one', flatOptions)).toEqual(oneOption)
  })

  it('returns option from grouped list', () => {
    expect(optionByValue('one', groupedOptions)).toEqual(oneOption)
  })

  describe('when option does not exist', () => {
    it('returns undefined from flat list', () => {
      expect(optionByValue('three', flatOptions)).toBeUndefined()
    })

    it('returns undefined from grouped list', () => {
      expect(optionByValue('three', groupedOptions)).toBeUndefined()
    })
  })
})
