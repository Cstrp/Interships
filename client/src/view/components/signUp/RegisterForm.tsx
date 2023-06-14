import { Field, Form, Formik } from "formik";
import { initialValues } from "./initialValues.ts";
import { validationSchema } from "./validationSchema.ts";
import { TextFormField } from "../common";
import { Button, IconButton, Typography } from "@mui/material";
import { register } from "../../../data/api/register.ts";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const RegisterForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(v, h) => {
          register(v)
            .then(r => console.log(r))
            .catch(e => console.log(e));
          h.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form className={"w-[500px] flex flex-col gap-7"}>
            <Typography variant={"h5"} className={"uppercase"}>
              REGISTER
            </Typography>
            <Field
              name={"username"}
              className={"h-10"}
              component={TextFormField}
              placeholder={"Type your name..."}
              type={"text"}
            />
            <Field
              name={"email"}
              className={"h-10"}
              component={TextFormField}
              placeholder={"Type your email..."}
              type={"email"}
            />
            <Field
              name={"password"}
              component={TextFormField}
              type={showPass ? "text" : "password"}
              className={"h-10"}
              placeholder={"Type your password..."}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleShowPass}>
                    {showPass ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <Button
              sx={{ mt: 2 }}
              variant={"outlined"}
              color={"inherit"}
              type={"submit"}
              disabled={!formik.isValid}
            >
              Submit !
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
