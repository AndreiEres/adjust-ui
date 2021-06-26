import PropTypes from 'prop-types'
import React from 'react'
import { cn } from '../../utils/classnames'
import { SelectOptionsList } from './SelectOptionsList'
import { SelectTrigger } from './SelectTrigger'
import s from './styles.module.css'
import { SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  showDescription = false,
  mode = 'light',
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const isDarkMode = mode === 'dark'
  const open = () => setIsOpen(true)
  const handleClick = (newValue: string) => {
    setIsOpen(false)
    onChange && onChange(newValue)
  }

  if (options.length === 0) return null

  return (
    <div className={cn(s.root, isDarkMode && s.darkMode)}>
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
  mode: PropTypes.oneOf(['light', 'dark']),
  onChange: PropTypes.func,
}
