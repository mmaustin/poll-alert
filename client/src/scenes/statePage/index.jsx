import { useParams } from "react-router-dom";
import StateObservancesWidget from "scenes/widgets/StateObservancesWidget";
import unitedStates from "statesFolder";


const StatePage = () => {

  const {stateId} = useParams();
  const st = unitedStates.filter(s => s._id === stateId);
  const {flagPicturePath, name} = st[0];  

  return (
    <>
      <StateObservancesWidget stateId={stateId} />
      <div>{name}</div>
    </>
  )
}
export default StatePage