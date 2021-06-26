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
  showDescription?: boolean
  mode?: 'light' | 'dark'
  onChange?: (value: string) => void
}

export type SelectTriggerProps = {
  label: string
  onClick: () => void
}

export type SelectOptionCommonProps = {
  currentValue: string
  showDescription: boolean
  onClick: (value: string) => void
}

export type SelectOptionsListProps = SelectOptionCommonProps & {
  options: SelectOptionType[]
}

export type SelectBaseOptionProps = SelectBaseOptionType &
  SelectOptionCommonProps

export type SelectGroupOptionProps = SelectGroupOptionType &
  SelectOptionCommonProps
