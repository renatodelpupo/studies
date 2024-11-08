type Props = {
  label: string
}

export default function Button(props: Props) {
  return <button className="bg-green-500 p-2 rounded-md">{props.label}</button>
}
