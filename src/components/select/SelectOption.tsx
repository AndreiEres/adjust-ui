import React from 'react'
import { isSelectBaseOption } from './guards'
import { SelectBaseOption } from './SelectBaseOption'
import { SelectGroupOption } from './SelectGroupOption'
import { SelectBaseOptionProps, SelectGroupOptionProps } from './types'

export const SelectOption: React.FC<SelectOptionProps> = (props) =>
  isSelectBaseOption(props) ? (
    <SelectBaseOption {...props} key={props.value} />
  ) : (
    <SelectGroupOption {...props} />
  )

export type SelectOptionProps = SelectGroupOptionProps | SelectBaseOptionProps
