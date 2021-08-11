import './Button.css'

const Button = (props) => {
  return (
    <button onClick={(e) => props.click && props.click(props.label)} className={`button ${props.variant || ''}`}>
      {props.label}
    </button>
  )
}

export default Button
