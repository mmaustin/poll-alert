import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getObservances, setLogout } from "state";
import ObservanceWidget from "./ObservanceWidget";
import FlexBetween from "components/FlexBetween";
import { useTheme, Typography } from "@mui/material";


const ObservancesWidget = () => {

  const dispatch = useDispatch();
  const observances = useSelector(state => state.observances);
  const token = useSelector(state => state.token);
  const { palette } = useTheme();

  const grabObservances = async () => {
    const response = await fetch('http://localhost:5001/observances', {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`}
    });
    const data = await response.json();
    if(!data.message && !data.error ){
      dispatch(getObservances({observances: data}));
    } else {
      dispatch(setLogout());
    }
  }

  useEffect(() => {
    grabObservances();
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {observances.length > 0 ? observances?.map(({
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
      )) : <FlexBetween >
      <Typography mt={'2rem'} sx={{ color: palette.primary.dark}} variant="h4" fontWeight='500' >
        There Are No Reports Of Irregularities At This Time.
      </Typography>
    </FlexBetween> }
    </>
  )
}
export default ObservancesWidget;