import { useParams } from "react-router-dom";
import unitedStates from "statesFolder";



const StatePage = () => {

  const {stateId} = useParams();
  const st = unitedStates.filter(s => s._id === stateId);
  console.log(st);
  //const {flagPicturePath} = st[0];  

  return (
    <div>StatePage</div>
  )
}
export default StatePage