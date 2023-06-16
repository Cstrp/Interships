import {
  Autocomplete,
  Button,
  ButtonGroup,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { CollectionModalProps } from "./CollectionModalProps.ts";
import { initialValues } from "./initialValues.ts";
import { TextFormField } from "../../common";
import { AddBox, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { api, createCollection } from "../../../../data";
import { useSnackbar } from "notistack";

export const CollectionModal = ({ isOpen, onClose }: CollectionModalProps) => {
  const [themes, setThemes] = useState<string[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const res = await api<string>("/listOfCollectibles.txt");
        const fetchedThemes = res.data.split("\n").map(str => str.trim());
        setThemes(fetchedThemes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchThemes();
  }, []);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex justify-center items-center w-full "
      keepMounted
    >
      <div className="relative w-[1240px] h-[700px] bg-teal-50/20 rounded-lg backdrop-blur-md flex justify-center items-center">
        <div className="w-full h-full overflow-y-auto px-10 py-8">
          <Formik
            initialValues={initialValues}
            onSubmit={(v, h) => {
              createCollection(v).then(r => enqueueSnackbar(r?.message));
              h.resetForm();
            }}
          >
            {({ values }) => (
              <Form className="flex flex-col gap-7 max-h-full py-2">
                <Typography variant={"h5"} sx={{ textTransform: "uppercase" }}>
                  Create new collection!
                </Typography>
                <Field
                  name="name"
                  component={TextFormField}
                  placeholder="Enter the name of your collection"
                />
                <Field name="theme">
                  {({ field, form }: FieldProps) => (
                    <Autocomplete
                      options={themes}
                      getOptionLabel={option => option}
                      value={field.value}
                      onChange={(_, value) =>
                        form.setFieldValue(field.name, value)
                      }
                      onBlur={field.onBlur}
                      renderInput={params => (
                        <TextField
                          variant={"standard"}
                          {...params}
                          placeholder="Enter the theme of your collection"
                        />
                      )}
                    />
                  )}
                </Field>
                <Field
                  name="description"
                  component={TextFormField}
                  placeholder="Enter the description of your collection"
                />
                <Field
                  type={"file"}
                  name="imageUrl"
                  component={TextFormField}
                  placeholder="Enter the image URL"
                />
                <FieldArray
                  name="fields"
                  render={arrayHelpers => (
                    <>
                      {values.fields.map((_, idx) => (
                        <div key={idx} className="flex-grow">
                          <Field
                            name={`fields.${idx}.type`}
                            component={TextFormField}
                            placeholder="Enter the field type"
                          />
                          <Field
                            name={`fields.${idx}.name`}
                            component={TextFormField}
                            placeholder="Enter the field name"
                          />
                          <ButtonGroup>
                            <Tooltip title={"Add"}>
                              <IconButton
                                onClick={() => {
                                  arrayHelpers.insert(idx, {
                                    type: "",
                                    name: "",
                                  });
                                }}
                              >
                                <AddBox />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title={"Remove"}>
                              <IconButton
                                onClick={() => {
                                  arrayHelpers.remove(idx);
                                }}
                              >
                                <Delete />
                              </IconButton>
                            </Tooltip>
                          </ButtonGroup>
                        </div>
                      ))}
                    </>
                  )}
                />
                <Button type={"submit"} variant={"outlined"} color={"inherit"}>
                  Create!
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};
