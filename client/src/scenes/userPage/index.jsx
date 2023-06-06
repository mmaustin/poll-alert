import { useState, useEffect } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme,
    FormControl,
    MenuItem,
    FormHelperText,
    InputLabel,
    Select
} from "@mui/material";
import EditOutLinedIcon from '@mui/icons-material/EditOutlined';
import { Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import unitedStates from "statesFolder";


const UserPage = () => {

  const user = useSelector(state => state.user);
  const {firstName, lastName, piturePath, stateId, congressDist, pollingPlace} = user;

  return (
    <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : undefined}
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
                {displayError && (
                    <p>Please Fill Out All Of The Fields</p>
                )}
                {noUserOrPass && (
                    <p>{noUserOrPass}</p>
                )}
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                    }}
                >
                    {isRegister && (
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
                                value={values.lastame}
                                name="lastName"
                                error={Boolean(touched.lastame) && Boolean(errors.lastame)}
                                helperText={touched.lastame && errors.lastame}
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
                                                <p>Add Picture Here</p>
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
                    )}                 
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
                        {isLogin ? "LOGIN" : "REGISTER"}
                    </Button>
                </Box>
            </form>
        )}
    </Formik>    
  )
}
export default UserPage;