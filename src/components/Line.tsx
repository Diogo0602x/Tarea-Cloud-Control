interface LineItemsProps {
  style?: string;
}

const Line = (props: LineItemsProps) => {
  return (
    <div className={`h-[2.5px] bg-secondary rounded-sm ${props.style} `}>
    </div>
  )
}

export default Line