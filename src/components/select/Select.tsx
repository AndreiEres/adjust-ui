import PropTypes from 'prop-types'
import React from 'react'
import { cn } from '../../utils/classnames'
import useOnClickOutside from '../../utils/useOnClickOutside'
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
  const ref = React.useRef(null)
  const isDarkMode = mode === 'dark'
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const handleClick = (newValue: string) => {
    close()
    onChange && onChange(newValue)
  }
  useOnClickOutside(ref, close)

  if (options.length === 0) return null

  return (
    <div className={cn(s.root, isDarkMode && s.darkMode)}>
      <div className={cn(isOpen && s.disabledEvents)} onClick={open}>
        <SelectTrigger label={value} />
      </div>
      {isOpen && (
        <div ref={ref}>
          <SelectOptionsList
            currentValue={value}
            options={options}
            showDescription={showDescription}
            onClick={handleClick}
          />
        </div>
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
