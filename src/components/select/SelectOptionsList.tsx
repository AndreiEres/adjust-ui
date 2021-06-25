import PropTypes from 'prop-types'
import React from 'react'
import { SelectOption } from './SelectOption'
import { SelectOptionsListProps } from './types'

export const SelectOptionsList: React.FC<SelectOptionsListProps> = ({
  currentValue,
  options,
  onClick,
}) => (
  <div>
    {options.map((option, idx) => (
      <SelectOption
        {...option}
        currentValue={currentValue}
        onClick={onClick}
        key={idx}
      />
    ))}
  </div>
)

SelectOptionsList.propTypes = {
  currentValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
