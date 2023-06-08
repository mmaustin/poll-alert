import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getObservances, getStateObservances } from "state";
import ObservanceWidget from "./ObservanceWidget";


const StateObservancesWidget = ({stateId}) => {

  const dispatch = useDispatch();
  const observances = useSelector(state => state.observances);
  let stateObservances = [];
  if(observances.length > 0){
    stateObservances = observances?.filter(item => item.userStateId === stateId);
  }
  console.log(stateObservances);
  const token = useSelector(state => state.token);
  

  const grabObservances = async () => {
    const response = await fetch('http://localhost:5001/observances', {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`}
    });
    const data = await response.json();
    if(!data.message){
      dispatch(getObservances({observances: data}));
    } else {
      return
    }
  }

  useEffect(() => {
    grabObservances();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {stateObservances.length > 0 ? stateObservances?.map(({
        _id, userId, firstName, lastName, description, pollingPlace,
        alsoObserved, userStateId, userPicturePath
      }) => (
        <ObservanceWidget
          key={_id}
          observanceId={_id}
          userId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          pollingPlace={pollingPlace}
          alsoObserved={alsoObserved}
          stateId={userStateId}
          picturePath={userPicturePath}
        />
      )) : <p>There are no observances yet</p>}
    </>
  )
}
export default StateObservancesWidget;