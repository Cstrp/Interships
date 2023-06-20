import { Field, Form, Formik } from "formik";
import { TextFormField } from "../common";
import { initialValues } from "./initialValues.ts";
import { validationSchema } from "./validationSchema.ts";
import { Button, IconButton, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getLs, login, ROUTER_PATHS } from "../../../data";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const LoginForm = () => {
  const [showPass, setShowPass] = useState<boolean>(false);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(v, h) => {
          login(v);
          h.resetForm();

          const token = getLs("token");
          if (token) navigate(ROUTER_PATHS.COLLECTIONS);
        }}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form className={"w-1/2 flex flex-col gap-5"}>
            <Typography variant={"h5"} className={"uppercase"}>
              Login
            </Typography>

            <Field
              name={"email"}
              component={TextFormField}
              className={"h-10"}
              type={"email"}
              placeholder={"Type your email..."}
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
              variant={"contained"}
              disabled={!formik.isValid}
              type={"submit"}
              sx={{ mt: 3 }}
            >
              Submit !
            </Button>

            <Button
              variant={"text"}
              sx={{ textTransform: "inherit", color: "text.primary" }}
              component={Link}
              to={ROUTER_PATHS.SIGN_UP}
            >
              Don't have an account?
              <strong className={"ml-3 underline"}>Join Collectify</strong>
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
