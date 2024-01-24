import { useEffect, useState } from "react";
import { IRootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addCombinedData } from "../store/combinedDataStore";

function DataTableShow() {
  const dispatch = useDispatch();
  const users = useSelector(
    (state: IRootState) => state.myObject.personalDetails
  );
  const addDetails = useSelector(
    (state: IRootState) => state.myObject.userAddressDetails
  );

  const mergedData = [...users, ...addDetails];
  const combinedObject = Object.assign({}, ...mergedData);

  console.log(combinedObject);
  const [previousCombinedObject, setPreviousCombinedObject] =
    useState(combinedObject);

  useEffect(() => {
    // Dispatch the action only if the combinedObject is different
    if (combinedObject !== previousCombinedObject) {
      dispatch(addCombinedData(combinedObject));
      setPreviousCombinedObject(combinedObject);
    }
  }, [combinedObject, dispatch, previousCombinedObject]);

  const combinedData = useSelector(
    (state: IRootState) => state.myArray.combinedDataArray
  );

  console.log(combinedData[combinedData.length-1], "data");
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Sex</th>
          <th scope="col">Mobile Number</th>
          <th scope="col">ID Type</th>
          <th scope="col">ID Number</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Country</th>
          <th scope="col">Pincode</th>
        </tr>
      </thead>
      <tbody>
        {combinedData?.map((item: any, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.sex}</td>
            <td>{item.mobileNumber}</td>
            <td>{item.idType}</td>
            <td>{item.idValue}</td>
            <td>{item.address}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.country}</td>
            <td>{item.pincode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTableShow;
