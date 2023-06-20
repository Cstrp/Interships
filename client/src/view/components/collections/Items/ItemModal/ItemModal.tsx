import { createItem, Item, itemsStore, updateItem } from "../../../../../data";
import { Button, Chip, Input, Modal, Typography } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import { FieldsArray, TextFormField } from "../../../common";
import { useSnackbar } from "notistack";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ItemModalProps } from "./ItemModalProps.ts";
import { observer } from "mobx-react";

export const ItemModal = observer(
  ({ isOpen, onClose, itemId, item }: ItemModalProps) => {
    const { enqueueSnackbar } = useSnackbar();
    const [tagValue, setTagValue] = useState("");

    const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTagValue(event.target.value);
    };

    const collectionId = useLocation().pathname.split("/")[2];

    const initialValues: Item = {
      title: item?.title || "",
      image: item?.image || "",
      tags: item?.tags || [],
      fields: item?.fields || [{ type: "", name: "" }],
    };

    return (
      <Modal
        open={isOpen}
        onClose={onClose}
        keepMounted
        className="flex justify-center items-center w-full "
      >
        <div className="relative w-[1240px] h-[700px] bg-teal-50/20 rounded-lg backdrop-blur-md flex justify-center items-center">
          <div className="w-full h-full overflow-y-auto px-10 py-8">
            <Formik
              initialValues={initialValues}
              onSubmit={(v, h) => {
                if (itemId) {
                  updateItem(itemId, v).then(m => enqueueSnackbar(m?.message));
                  itemsStore.updateItem(itemId, v);
                  h.resetForm();
                  onClose();
                } else {
                  createItem({ collectionId, ...v }).then(m =>
                    enqueueSnackbar(m?.message)
                  );
                  itemsStore.addItem(v);
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
                    {itemId
                      ? "Update item"
                      : "Create new item to your collection!"}
                  </Typography>
                  <Field
                    name={"title"}
                    component={TextFormField}
                    placeholder={"Enter the title of your collection item"}
                  />
                  <Field
                    name={"image"}
                    component={TextFormField}
                    placeholder={"Enter image url of your collection item"}
                  />

                  <FieldArray
                    name="tags"
                    render={arrayHelpers => (
                      <>
                        <div className=" flex flex-wrap gap-1">
                          {values.tags &&
                            values.tags.map((tag, idx) => (
                              <Chip
                                key={idx}
                                label={tag}
                                onDelete={() => arrayHelpers.remove(idx)}
                              />
                            ))}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Input
                            placeholder="Enter tags"
                            className="w-full"
                            value={tagValue}
                            onChange={handleTagChange}
                          />
                          <Button
                            variant="outlined"
                            color={"inherit"}
                            onClick={() => {
                              arrayHelpers.push(tagValue);
                            }}
                            className={"w-2/12"}
                            disabled={!tagValue}
                          >
                            Add Tag
                          </Button>
                        </div>
                      </>
                    )}
                  />

                  <FieldArray
                    name={"fields"}
                    render={helper => (
                      <>
                        {values.fields && (
                          <FieldsArray
                            fields={values.fields}
                            helpers={helper}
                          />
                        )}
                      </>
                    )}
                  />
                  <Button
                    type={"submit"}
                    color={"inherit"}
                    variant={"outlined"}
                  >
                    {itemId ? "Update" : "Create"}
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
