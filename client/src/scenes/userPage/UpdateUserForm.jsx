import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
} from "@mui/material";
import EditOutLinedIcon from '@mui/icons-material/EditOutlined';
import { Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import unitedStates from "statesFolder";
import { setLogout } from "state";

const UserPage = () => {

  const stateOptions = unitedStates;
  const user = useSelector(state => state.user);
  const token = useSelector(state => state.token);
  const {_id, firstName, lastName, picturePath, stateId, congressDist, pollingPlace} = user;

  const initialUpdateValues = {
    firstName: firstName,
    lastName: lastName,
    pollingPlace: pollingPlace,
    congressDist: congressDist,
    picturePath: picturePath,
    stateId: stateId,
  }  

  
  const {palette} = useTheme();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = async(values) => {
    const updatedUserResponse = await fetch(
        `http://localhost:5001/users/${_id}`,
        {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: values.firstName,
              lastName: values.lastName,
              picturePath: values.picture?.name ? values.picture?.name : values.picturePath,
              pollingPlace: values.pollingPlace,
              congressDist: values.congressDist,
              stateId: values.stateId
            })
        }
    );
    const updatedUser = await updatedUserResponse.json();
    if(!updatedUser.error){
      dispatch(
        setLogout()
      )
    }
  }

  return (
    <>
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialUpdateValues}
    >
        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
        }) => (
            <form onSubmit={handleSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                    }}
                >
                        <>
                          <div>
                            <Field
                              as='select'
                              id="stateId"
                              name="stateId"
                            >
                              <>
                                <option value="">
                                    
                                </option>
                              </>
                              {stateOptions.map(state => {
                                return <option key={state._id} value={state._id}>{state.name}</option>
                              })}
                            </Field>
                          </div>                    
                            <TextField
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                label="Congressional District"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.congressDist}
                                name="congressDist"
                                error={Boolean(touched.congressDist) && Boolean(errors.congressDist)}
                                helperText={touched.congressDist && errors.congressDist}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                label="Polling Place"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.pollingPlace}
                                name="pollingPlace"
                                error={Boolean(touched.pollingPlace) && Boolean(errors.pollingPlace)}
                                helperText={touched.pollingPlace && errors.pollingPlace}
                                sx={{gridColumn: "span 4"}}
                            />
                            <Box
                                gridColumn="span 4"
                                border={`1px solid ${palette.neutral.medium}`}
                                borderRadius="5px"
                                p="1rem"
                            >
                                <Dropzone
                                    acceptedFiles=".jpg, .jpeg, .png"
                                    multiple={false}
                                    onDrop={(acceptedFiles) =>
                                        setFieldValue("picture", acceptedFiles[0])
                                    }
                                >
                                    {({getRootProps, getInputProps}) => (
                                        <Box
                                            {...getRootProps()}
                                            border={`2px dashed ${palette.primary.mani}`}
                                            p="1rem"
                                            sx={{"&:hoover": {cursor: "pointer"}}}
                                        >
                                            <input {...getInputProps()} />
                                            {!values.picture ? (
                                                <p>Update Picture (jpg, jpeg, png files only)</p>
                                            ) : (
                                                <FlexBetween>
                                                    <Typography>{values.picture.name}</Typography>
                                                    <EditOutLinedIcon/>
                                                </FlexBetween>
                                            )}
                                        </Box>
                                    )}
                                </Dropzone>
                            </Box>
                        </>
                                    
                </Box>
                <Box>
                    <Button
                        fullWidth
                        type="submit"
                        sx={{
                            m: "2rem 0",
                            p: "1rem",
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt,
                            "&:hover": {color: palette.primary.main},
                        }}
                    >
                        Update User Information
                    </Button>
                </Box>
            </form>
        )}
    </Formik>
    </>  
  )
}
export default UserPage;