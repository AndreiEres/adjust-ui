import { isSelectBaseOption } from './guards'
import { SelectOptionType } from './types'

// TODO: too much ifs
export const optionByValue = (value: string, options: SelectOptionType[]) => {
  for (const option of options) {
    if (isSelectBaseOption(option)) {
      if (option.value === value) return option
    } else {
      for (const nestedOption of option.options) {
        if (nestedOption.value === value) return nestedOption
      }
    }
  }
}
