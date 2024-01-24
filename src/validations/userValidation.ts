import * as yup from "yup";

const stringCondition = (value: string | undefined): value is string => {
  return value !== undefined && typeof value === "string";
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  age: yup
    .number()
    .required("Age is required")
    .positive()
    .integer("Age must be a positive integer"),
  sex: yup
    .string()
    .required("Sex is required")
    .oneOf(["Male", "Female"], "Invalid sex"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^\+91[6-9]\d{9}$/, "Invalid Indian mobile number"),
  govtIdType: yup
    .string()
    .oneOf(["Aadhar", "PAN"], "Invalid Govt Issued ID Type"),

  govtId: yup.string().when("govtIdType", {
    is: (govtIdType: string | undefined) => govtIdType === "Aadhar",
    then: (govtIdType) =>
      yup
        .string()
        .matches(/^[2-9]\d{11}$/, "Invalid Aadhar ID")
        .required("Aadhar number is required for Aadhar ID type"),

    otherwise: (govtIdType) =>
      yup.string().when("govtIdType", {
        is: (govtIdType: string | undefined) => govtIdType === "PAN",
        then: (govtIdType) =>
          yup
            .string()
            .matches(/^[A-Za-z0-9]{10}$/, "Invalid PAN ID")
            .required("PAN number is required for PAN ID type"),

        otherwise: yup.string(),
      }),
  }),
});

// Example usage:
// const isValid = await validationSchema.isValid({ /* Your form data here */ });

// Example usage:
// const isValid = await validationSchema.isValid({ /* Your form data here */ });
