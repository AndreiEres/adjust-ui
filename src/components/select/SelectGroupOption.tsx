import PropTypes from 'prop-types'
import React from 'react'
import { SelectBaseOption } from './SelectBaseOption'
import { SelectGroupOptionProps } from './types'

export const SelectGroupOption: React.FC<SelectGroupOptionProps> = ({
  options,
  currentValue,
  onClick,
}) => (
  <>
    {options.map((option) => (
      <SelectBaseOption
        {...option}
        currentValue={currentValue}
        onClick={onClick}
        key={option.value}
      />
    ))}
  </>
)

SelectGroupOption.propTypes = {
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
