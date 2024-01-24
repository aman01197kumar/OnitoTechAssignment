import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { validationSchema } from "../validations/userValidation";
import { useDispatch, useSelector } from "react-redux";
import { addObject } from "../store/details";
// import { RootState } from "@reduxjs/toolkit/query";


function PersonalDetails() {
  const [name, setName] = useState<String>("");
  const [mobileNumber, setMobileNumber] = useState<Number | any>(null);
  const [sex, setSex] = useState<String>("");
  const [idType, setIdType] = useState<String>("");
  const [idValue, setIdValue] = useState<number | undefined>();


  const [dateOfBirth, setDateOfBirth] = useState<String>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleValidation = (e: any) => {
    e.preventDefault();

    const userData = {
      name: name,
      age: Number(dateOfBirth),
      mobileNumber: Number("+91" + mobileNumber),
      sex: sex,
      idType: idType,
      idValue: idValue,
    };

    dispatch(addObject(userData));
    navigate("/address-details");

  };

  


  return (
    <div className="m-4 p-4 bg-secondary">
      <div className="mb-3 border-bottom fs-3 fw-3 d-flex justify-content-center">
        Personal Details
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between w-75">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>
                Name<span className="text-danger">*</span>
              </div>
              <TextField
                required
                id="outlined-basic"
                label="Enter name"
                variant="outlined"
                className="w-75"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                Mobile<span className="text-danger">*</span>
              </div>
              <TextField
                id="outlined-basic"
                label="Enter Mobile"
                variant="outlined"
                className="w-75"
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex flex-column" style={{ width: "58%" }}>
            <div className="d-flex justify-content-between mb-3">
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ width: "60%" }}
              >
                <div style={{ width: "30%" }}>
                  Date of Birth or Age<span className="text-danger">*</span>
                </div>
                <TextField
                  required
                  id="outlined-basic"
                  label="DD/MM/YYYY or Age in Years"
                  variant="outlined"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ width: "34%" }}
              >
                <div className="w-50">
                  Sex<span className="text-danger">*</span>
                </div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Enter Sex
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sex}
                    label="Age"
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div style={{ width: "28%" }}>Govt Issued ID</div>
              <div className="w-100">
                <FormControl className="w-25 mr-3">
                  <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={idType}
                    label="Age"
                    onChange={(e) => setIdType(e.target.value)}
                  >
                    <MenuItem value="Aadhar">Aadhar</MenuItem>
                    <MenuItem value="PAN">PAN</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-basic"
                  label="Enter Govt ID"
                  variant="outlined"
                  className="w-75"
                  onChange={(e) =>
                    setIdValue(
                      e.target.value === "" ? undefined : +e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="contained" className="w-25" onClick={handleValidation}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default PersonalDetails;
