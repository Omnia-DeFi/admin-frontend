import {Button as AntButton} from "antd";

const Button = ({onClick, type, size}) => {
  return (
    <AntButton type={type} size={size} onClick={onClick}/>
  )
}

export default Button