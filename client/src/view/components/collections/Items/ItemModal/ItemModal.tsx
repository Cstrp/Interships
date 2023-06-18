import { createItem, Item, updateItem } from "../../../../../data";
import { Button, Modal, Typography } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import { FieldsArray, TextFormField } from "../../../common";
import { useSnackbar } from "notistack";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemId: string;
  item?: Item;
}
export const ItemModal = ({
  isOpen,
  onClose,
  itemId,
  item,
}: ItemModalProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const initialValues: Item = {
    title: item?.title || "",
    image: item?.image || "",
    tags: item?.tags || [],
    fields: item?.fields || [],
    comments: item?.comments || [],
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
                h.resetForm();
              } else {
                createItem(v).then(m => enqueueSnackbar(m?.message));
                h.resetForm();
              }
            }}
          >
            {() => (
              <Form className="flex flex-col gap-7 max-h-full py-2">
                <Typography variant={"h5"} sx={{ textTransform: "uppercase" }}>
                  {itemId ? "Update item" : "Create new item to ur collection!"}
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
                  name={"fields"}
                  render={helper => (
                    <FieldsArray fields={[]} helpers={helper} />
                  )}
                />
                <Button type={"submit"} color={"inherit"} variant={"outlined"}>
                  {itemId ? "Update" : "Create"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};
