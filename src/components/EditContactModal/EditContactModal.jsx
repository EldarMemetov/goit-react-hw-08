import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./EditContactModal.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

export default function EditContactModal({
  open,
  handleClose,
  handleSave,
  initialValues,
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Edit Contact</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={
                    touched.name && errors.name
                      ? styles.inputError
                      : styles.input
                  }
                />
                {touched.name && errors.name && (
                  <div className={styles.error}>{errors.name}</div>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className={
                    touched.phone && errors.phone
                      ? styles.inputError
                      : styles.input
                  }
                />
                {touched.phone && errors.phone && (
                  <div className={styles.error}>{errors.phone}</div>
                )}
              </div>
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.saveButton}>
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
