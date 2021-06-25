import PropTypes from 'prop-types'
import React from 'react'
import { SelectBaseOption } from './SelectBaseOption'
import { SelectGroupOptionProps } from './types'
import s from './styles.module.css'

export const SelectGroupOption: React.FC<SelectGroupOptionProps> = ({
  options,
  currentValue,
  showDescription,
  onClick,
}) => (
  <div className={s.groupOption}>
    {options.map((option) => (
      <SelectBaseOption
        {...option}
        currentValue={currentValue}
        showDescription
        onClick={onClick}
        key={option.value}
      />
    ))}
  </div>
)

SelectGroupOption.propTypes = {
  options: PropTypes.array.isRequired,
  currentValue: PropTypes.string.isRequired,
  showDescription: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
