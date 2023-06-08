import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import MyObservancesWidget from "scenes/widgets/MyObservancesWidget";
import StateObservancesWidget from "scenes/widgets/StateObservancesWidget";
import unitedStates from "statesFolder";



const StatePage = () => {

  const {stateId} = useParams();
  const {_id, picturePath} = useSelector(state => state.user);

  return (
    <>
      <Navbar/>
      <MyObservancesWidget userId={_id} picturePath={picturePath} />
      <StateObservancesWidget stateId={stateId} />
    </>
  )
}
export default StatePage