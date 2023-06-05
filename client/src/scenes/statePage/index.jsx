import { useParams } from "react-router-dom";
import unitedStates from "statesFolder";



const StatePage = () => {

  const {stateId} = useParams();
  const st = unitedStates.filter(s => s._id === stateId);
  const {flagPicturePath, name} = st[0];  

  return (
    <div>{name}</div>
  )
}
export default StatePage