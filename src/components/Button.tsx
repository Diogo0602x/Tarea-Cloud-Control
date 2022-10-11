interface ButtonItemProps {
  style?:  string;
  link?:  string;
  text: string;
  onClick?: () => void;
}

export function Button(props: ButtonItemProps) {
  return (
    <button className={`bg-secondary text-primary ${props.style} rounded-xl font-semibold`}>
      <a href={props.link}>{props.text}</a>
    </button>
  )
}
