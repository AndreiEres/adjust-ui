import { SelectBaseOptionProps, SelectGroupOptionProps } from './types'

export const isSelectBaseOption = (
  option: SelectBaseOptionProps | SelectGroupOptionProps
): option is SelectBaseOptionProps =>
  !Boolean((option as SelectGroupOptionProps).options)
