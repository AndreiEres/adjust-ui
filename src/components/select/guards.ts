import {
  SelectBaseOptionType,
  SelectGroupOptionType,
  SelectOptionType,
} from './types'

export const isSelectBaseOption = (
  option: SelectOptionType
): option is SelectBaseOptionType =>
  !Boolean((option as SelectGroupOptionType).options)
