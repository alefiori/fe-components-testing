import { ChangeEvent, FC } from 'react'

type SearchBarProps = {
  searchValue: string
  onSearchValueChange: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({
  onSearchValueChange,
  searchValue,
}) => {
  const searchValueChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => onSearchValueChange(value)

  return (
    <input
      value={searchValue}
      className="search-bar"
      type="search"
      placeholder="Type something to filter tasks..."
      onChange={searchValueChange}
    />
  )
}
