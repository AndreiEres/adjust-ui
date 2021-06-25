import PropTypes from 'prop-types'
import React from 'react'
import { SelectBaseOption, SelectBaseOptionProps } from './SelectBaseOption'

export const SelectGroupOption: React.FC<SelectGroupOptionProps> = ({
  options,
}) => (
  <>
    {options.map((option) => (
      <SelectBaseOption {...option} key={option.value} />
    ))}
  </>
)

export type SelectGroupOptionProps = {
  options: SelectBaseOptionProps[]
}
SelectGroupOption.propTypes = {
  options: PropTypes.array.isRequired,
}
