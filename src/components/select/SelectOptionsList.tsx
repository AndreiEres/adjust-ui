import PropTypes from 'prop-types'
import React from 'react'
import { SelectOption } from './SelectOption'
import { SelectOptionsListProps } from './types'
import s from './styles.module.css'
import { cn } from '../../utils/classnames'

export const SelectOptionsList: React.FC<SelectOptionsListProps> = ({
  currentValue,
  options,
  showDescription,
  onClick,
}) => (
  <div className={cn(s.optionsList, showDescription && s.withDescription)}>
    {options.map((option, idx) => (
      <SelectOption
        {...option}
        currentValue={currentValue}
        showDescription={showDescription}
        onClick={onClick}
        key={idx}
      />
    ))}
  </div>
)

SelectOptionsList.propTypes = {
  currentValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  showDescription: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
