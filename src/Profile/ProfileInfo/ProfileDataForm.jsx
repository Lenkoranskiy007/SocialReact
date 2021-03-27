import React from "react";
import {useFormik} from "formik";
import {Redirect} from "react-router";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@material-ui/core";

export const  ProfileDataForm = (props) => {
    const formik = useFormik({
        initialValues: {
           fullName: '',
           lookingJob: false,
           skills: '',
            aboutMe: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    })

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <div>
                            <b>Full name</b>:
                            <div>
                                <TextField

                                    {...formik.getFieldProps('fullName')}
                                />
                            </div>
                        </div>

                        <div>
                            <b>My professional skills</b>:
                            <div>
                                <TextField

                                    {...formik.getFieldProps('skills')}
                                />
                            </div>
                        </div>
                        <div>
                            <b>About me</b>:
                            <div>
                                <TextField

                                    {...formik.getFieldProps('aboutMe')}
                                />
                            </div>
                            <div>
                                <b>Looking for a job</b>:
                                <div>
                                    <Checkbox

                                        {...formik.getFieldProps('lookingJob')}
                                    />
                                </div>
                            </div>

                        </div>
                        <Button type={'submit'} variant={'contained'} color={'secondary'}>Save</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

