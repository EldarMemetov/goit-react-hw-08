import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./DeleteModal.module.css";

export default function DeleteModal({ open, handleClose, handleDelete }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box className={styles.modalContent}>
        <h2 className={styles.modalTitle}>
          Are you sure you want to delete this contact?
        </h2>
        <div className={styles.buttonGroup}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.cancelButton} onClick={handleClose}>
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
}
