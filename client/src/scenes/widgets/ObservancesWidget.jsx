import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import state, { getObservances } from "state";
import ObservanceWidget from "./ObservanceWidget";


const ObservancesWidget = ({userId}) => {

  const dispatch = useDispatch();
  const observances = useSelector(state => state.observances);
  const token = useSelector(state => state.token);

  const grabObservances = async () => {
    const response = await fetch('http://localhost:5001/observances', {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`}
    });
    const data = await response.json();
    dispatch(getObservances({observances: data}))
  }

  useEffect(() => {
    grabObservances();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>ObservancesWidget</div>
  )
}
export default ObservancesWidget;