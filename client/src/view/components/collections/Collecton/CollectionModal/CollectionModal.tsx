import {
  api,
  Collection,
  collectionStore,
  createCollection,
  updateCollection,
} from "../../../../../data";
import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { CollectionModalProps } from "./CollectionModalProps.ts";
import { FieldsArray, TextFormField } from "../../../common";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import {
  Autocomplete,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { observer } from "mobx-react";

export const CollectionModal = observer(
  ({ isOpen, onClose, collection, collectionId }: CollectionModalProps) => {
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

    const initialValues: Collection = {
      name: collection?.name || "",
      theme: collection?.theme || "",
      description: collection?.description || "",
      image: collection?.image || "",
      fields: collection?.fields || [{ type: "", name: "" }],
    };

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
                if (collectionId) {
                  updateCollection(collectionId, v).then(m =>
                    enqueueSnackbar(m?.message)
                  );
                  collectionStore.updateCollection(collectionId, v);
                  h.resetForm();
                  onClose();
                } else {
                  console.log(v);
                  createCollection(v).then(m => enqueueSnackbar(m?.message));
                  collectionStore.addCollection(v);
                  h.resetForm();
                  onClose();
                }
              }}
            >
              {({ values }) => (
                <Form className="flex flex-col gap-7 max-h-full py-2">
                  <Typography
                    variant={"h5"}
                    sx={{ textTransform: "uppercase" }}
                  >
                    {collectionId
                      ? "Update collection"
                      : "Create new collection!"}
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
                    name="image"
                    component={TextFormField}
                    placeholder="Enter the image URL"
                  />
                  <FieldArray
                    name="fields"
                    render={arrayHelpers => (
                      <FieldsArray
                        fields={values.fields}
                        helpers={arrayHelpers}
                      />
                    )}
                  />
                  <Button
                    type={"submit"}
                    variant={"outlined"}
                    color={"inherit"}
                  >
                    {collectionId ? "Update!" : "Create!"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    );
  }
);
