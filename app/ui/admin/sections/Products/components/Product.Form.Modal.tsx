import { Modal, ModalProps } from "@/app/ui";
import { FormProduct } from "@/app/ui/admin/sections/Products/components/Form.Product";

interface ProductFormModalProps {
  open: ModalProps["open"];
  onClose: ModalProps["onClose"];
  onSubmit: () => void;
}

export const ProductModal = ({
  open,
  onClose,
  onSubmit,
}: ProductFormModalProps) => {
  return (
    <Modal
      withBlur={false}
      open={open}
      onClose={onClose}
      contentWrapperClasses={"!bg-white max-h-[50%]"}
    >
      <FormProduct id={1} />
    </Modal>
  );
};
