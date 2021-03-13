// import React from 'react'
import {  Field } from 'react-final-form'
import {Form} from "formik";
//
//
//
// export const Login= (props) => {
//     //
//     //
//     return (
//
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <h1></h1>
//                 <Field
//                     placeholder={'Login'}
//                     name={'login'}
//                     component={'input'}
//                 />
//             </div>
//             <div>
//                 <Field
//                     placeholder={'Password'}
//                     name={'password'}
//                     component={'input'}
//
//                 />
//             </div>
//             <div>
//                 <Field
//                     component={'input'}
//                     name={'rememberMe'}
//                     type={'checkbox'}
//
//                 /> remember me
//             </div>
//             <button>Login</button>
//         </form>
//
//     )
//
// }
//
//


import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'

export const Login = () => {
    return <Grid container justify="center">
        <Grid item xs={4}>
            <FormControl>
                <FormLabel>
                    {/*<p>To log in get registered*/}
                    {/*    <a href={'https://social-network.samuraijs.com/'}*/}
                    {/*       target={'_blank'}>here*/}
                    {/*    </a>*/}
                    {/*</p>*/}
                    {/*<p>or use common test account credentials:</p>*/}
                    {/*<p>Email: free@samuraijs.com</p>*/}
                    {/*<p>Password: free</p>*/}
                </FormLabel>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                    />
                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox />}
                    />
                    <Button type={'submit'} variant={'contained'} color={'secondary'}>Login</Button>
                </FormGroup>
            </FormControl>
        </Grid>
    </Grid>
}

