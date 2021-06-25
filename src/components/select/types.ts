export type SelectBaseOptionType = {
  value: string
  label: string
  description?: string
}

export type SelectGroupOptionType = {
  options: SelectBaseOptionType[]
}

export type SelectOptionType = SelectBaseOptionType | SelectGroupOptionType

export type SelectProps = {
  value: string
  options: SelectOptionType[]
  onChange?: (value: string) => void
}

export type SelectOptionCommonProps = {
  currentValue: string
  onClick: (value: string) => void
}

export type SelectOptionsListProps = SelectOptionCommonProps & {
  options: SelectOptionType[]
}

export type SelectBaseOptionProps = SelectBaseOptionType &
  SelectOptionCommonProps

export type SelectGroupOptionProps = SelectGroupOptionType &
  SelectOptionCommonProps
