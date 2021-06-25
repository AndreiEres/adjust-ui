import { SelectBaseOptionProps } from './SelectBaseOption'
import { SelectGroupOptionProps } from './SelectGroupOption'

export const isSelectBaseOption = (
  option: SelectBaseOptionProps | SelectGroupOptionProps
): option is SelectBaseOptionProps =>
  !Boolean((option as SelectGroupOptionProps).options)
