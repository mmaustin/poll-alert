import { useSelector } from "react-redux";



const UserPage = () => {

  const user = useSelector(state => state.user);
  const {firstName} = user;

  return (
    <div>UserPage  {firstName}</div>
  )
}
export default UserPage;