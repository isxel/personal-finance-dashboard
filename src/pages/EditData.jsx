import { useState } from "react";
import style from "../styles/EditData.module.css";
import PropTypes from "prop-types";

function EditData({ monthlyData, setMonthlyData }) {
  const [tempData, setTempData] = useState([...monthlyData]);

  const handleChange = (index, key, value) => {
    const updatedData = [...tempData];
    updatedData[index][key] = value;
    setTempData(updatedData);
  };

  const handleSave = () => {
    setMonthlyData(tempData);
    alert("Data updated successfully!");
  };

  return (
    <div className={style.editData}>
      <h1>Edit Monthly Data</h1>
      {tempData.map((month, index) => (
        <div key={index} className={style.monthRow}>
          <label>
            Month:
            <input
              type="text"
              value={month.month}
              onChange={(e) => handleChange(index, "month", e.target.value)}
            />
          </label>
          <label>
            Income:
            <input
              type="number"
              value={month.income}
              onChange={(e) =>
                handleChange(index, "income", parseFloat(e.target.value))
              }
            />
          </label>
          <label>
            Spending:
            <input
              type="number"
              value={month.spending}
              onChange={(e) =>
                handleChange(index, "spending", parseFloat(e.target.value))
              }
            />
          </label>
        </div>
      ))}
      <button onClick={handleSave} className={style.saveButton}>
        Save Changes
      </button>
    </div>
  );
}

EditData.propTypes = {
  monthlyData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.string.isRequired,
      income: PropTypes.number.isRequired,
      spending: PropTypes.number.isRequired,
    })
  ).isRequired,
  setMonthlyData: PropTypes.func.isRequired,
};

export default EditData;
