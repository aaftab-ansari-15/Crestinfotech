import { useFormik } from "formik";
import FormikCon from "./FormikCon";
const FormikSta = ({ children, ...props }) => {
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikCon.Provider value={formikStateAndHelpers}>
      {typeof children === "function"
        ? children(formikStateAndHelpers)
        : children}
    </FormikCon.Provider>
  );
};

export default FormikSta;
