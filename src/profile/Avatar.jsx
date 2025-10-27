import { getImageUrl } from "../utils/script"

const Avatar = ({person,size}) => {
  return (
    <img className="avatar"
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}>
      
    </img>
  )
}
export default Avatar