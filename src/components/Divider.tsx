interface DividerProps {
  isCentered?: boolean
}

export function Divider({ isCentered = false }: DividerProps) {
  return (
    <div
      className={`h-[2px] w-[60px] bg-secondary ${isCentered ? 'mx-auto' : ''}`}
    />
  )
}
