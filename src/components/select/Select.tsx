import PropTypes from 'prop-types'
import React from 'react'
import { SelectOptionsList } from './SelectOptionsList'
import { SelectTrigger } from './SelectTrigger'
import s from './styles.module.css'
import { SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  showDescription = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const open = () => setIsOpen(true)
  const handleClick = (newValue: string) => {
    setIsOpen(false)
    onChange && onChange(newValue)
  }

  if (options.length === 0) return null

  return (
    <div className={s.root}>
      <SelectTrigger label={value} onClick={open} />
      {isOpen && (
        <SelectOptionsList
          currentValue={value}
          options={options}
          showDescription={showDescription}
          onClick={handleClick}
        />
      )}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  showDescription: PropTypes.bool,
  onChange: PropTypes.func,
}
