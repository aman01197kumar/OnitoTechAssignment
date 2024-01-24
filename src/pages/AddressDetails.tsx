import { Button, TextField } from "@mui/material";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { addAddressDetails } from "../store/details";
import { useNavigate } from "react-router-dom";

function AddressDetails() {
  const [address, setAddress] = useState<String>("");
  const [city, setCity] = useState<String>("");
  const [state, setState] = useState<String>("");
  const [country, setCountry] = useState<String>("");
  const [pincode, setPincode] = useState<number | undefined>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    const adddressDetailObj = {
      address: address,
      city: city,
      state: state,
      country: country,
      pincode: pincode,
    };
    dispatch(addAddressDetails(adddressDetailObj));
    navigate("/data-table");
  };

  return (
    <div className="m-4 p-4 bg-secondary">
      <div className="mb-3 border-bottom fs-3 fw-3 d-flex justify-content-center">
        Address Details
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between w-75">
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div>Address</div>
              <TextField
                id="outlined-basic"
                label="Enter Address"
                variant="outlined"
                className="w-75"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div>State</div>
              <TextField
                id="outlined-basic"
                label="Enter City"
                variant="outlined"
                className="w-75"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex flex-column" style={{ width: "58%" }}>
            <div className="d-flex justify-content-between mb-3">
              <div className="d-flex align-items-center justify-content-between">
                <div style={{ width: "30%" }}>City</div>
                <TextField
                  id="outlined-basic"
                  label="Enter City"
                  variant="outlined"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ width: "53%" }}
              >
                <div>Country</div>
                <TextField
                  id="outlined-basic"
                  label="Enter Country"
                  variant="outlined"
                  className="w-75"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ width: "55%" }}
            >
              <div>Pincode</div>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Enter Pincode"
                  variant="outlined"
                  className="w-75"
                  onChange={(e) =>
                    setPincode(
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
        <Button variant="contained" className="w-25" onClick={onSubmitHandler}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddressDetails;
