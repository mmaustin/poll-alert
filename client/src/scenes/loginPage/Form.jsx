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
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import unitedStates from "statesFolder";


const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    pollingPlace: yup.string().required("required"),
    congressDist: yup.string().required("required"),
    picturePath: yup.string().required("required"),
    stateId: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),    
})

const stateOptions = unitedStates;

const initialValuesRegister = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    pollingPlace: "",
    congressDist: "",
    picturePath: "",
    stateId: "",
}

const initialValuesLogin = {
    email: "",
    password: ""
}

const Form = () => {
   
    const [pageType, setPageType] = useState('login');
    const [displayError, setDisplayError] = useState(false);
    const {palette} = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const isLogin = pageType === "login";
    const isRegister = pageType === 'register';
    const user = useSelector(state => state.user);

    const displayToFalse = () => {
        setTimeout(()=>{
            setDisplayError(false);
        }, 5000)
    }

    const register = async(values, onSubmitProps) => {
        const {firstName, lastName, email, password, pollingPlace, congressDist, stateId} = values;
        if(!firstName || !lastName || !email || !password || !pollingPlace || !congressDist || !stateId){
            setDisplayError(true);
            displayToFalse();
            return
        }
      //console.log(values);
        //allows us to send form info with image
        const formData = new FormData();
        for(let value in values){
            formData.append(value, values[value]);
        }
        if(values.picture?.name){
            formData.append("picturePath", values.picture.name);
        }
        const savedUserResponse = await fetch(
            "http://localhost:5001/auth/register",
            {
                method: "POST",
                body: formData,
            }
        );
        const savedUser = await savedUserResponse.json();
        onSubmitProps.resetForm();

        if (savedUser){
            setPageType("login");
        }
    };

    const login = async(values, onSubmitProps) => {
      //console.log(values);
        const loggedInResponse = await fetch(
            "http://localhost:5001/auth/login",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(values),
            }
        );
        const loggedIn = await loggedInResponse.json();
        onSubmitProps.resetForm();

        if(loggedIn){
            dispatch(
                setLogin({
                    user: loggedIn.user,
                    token: loggedIn.token,
                })
            );
        }
    }

    const handleFormSubmit = async (values, onSubmitProps ) => {
      console.log(values);
        if(isLogin) await login(values, onSubmitProps);
        if(isRegister) await register(values, onSubmitProps);
    }

    useEffect(() => {
        if (user) {
          setTimeout(() => {
            navigate('/home')
          }, 1000)
        }
    }, [user, navigate])

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
                            {/* <label htmlFor="stateId">Select Your State</label>                */}
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
                    <TextField
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={Boolean(touched.email) && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{gridColumn: "span 4"}}
                    />                    
                    <TextField
                        label="Password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={Boolean(touched.password) && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{gridColumn: "span 4"}}
                    />                    
                </Box>
                <Box>
                    <Button
                        // onClick={e=> console.log(values)}
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
                    <Typography
                        onClick={()=>{
                            setPageType(isLogin ? "register" : "login");
                            resetForm();
                        }}
                        sx={{
                            textDecoration: "underline",
                            color: palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light,
                            }
                        }}
                    >
                        {
                            isLogin ?
                            "Don't have an account? Sign up here."
                            : "Already have an account? Login Here."
                        }
                    </Typography>
                </Box>
            </form>
        )}
    </Formik>
  )
}
export default Form