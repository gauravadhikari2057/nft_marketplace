import { useFormikContext } from "formik";
import Button from "../../../components/Button";
const SubmitButton = () => {
  const { isSubmitting, submitForm } = useFormikContext();

  return (
    <Button loading={isSubmitting} onClick={submitForm}>
      Upload NFT
    </Button>
  );
};

export default SubmitButton;
