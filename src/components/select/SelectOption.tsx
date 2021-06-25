import React from 'react'
import { isSelectBaseOption } from './guards'
import { SelectBaseOption, SelectBaseOptionProps } from './SelectBaseOption'
import { SelectGroupOption, SelectGroupOptionProps } from './SelectGroupOption'

export const SelectOption: React.FC<SelectOptionProps> = (option) =>
  isSelectBaseOption(option) ? (
    <SelectBaseOption {...option} key={option.value} />
  ) : (
    <SelectGroupOption {...option} />
  )

export type SelectOptionProps = SelectGroupOptionProps | SelectBaseOptionProps
