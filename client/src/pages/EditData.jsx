import { useState } from "react";
import style from "../styles/EditData.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function EditData({ monthlyData, setMonthlyData }) {
  const [tempData, setTempData] = useState([...monthlyData]);
  const navigate = useNavigate();

  const handleChange = (index, key, value) => {
    const updatedData = [...tempData];
    updatedData[index][key] = value;
    setTempData(updatedData);
  };

  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setMonthlyData(tempData);
      setSaving(false);
      navigate("/dashboard");
    }, 2000);
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className={style.editData}>
      <h1 className={style.title}>Edit Monthly Data</h1>
      <div className={style.monthContainer}>
        {tempData.map((month, index) => (
          <div key={index} className={style.monthRow}>
            <span className={style.monthLabel}> {month.month}</span>
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
      </div>
      <div className={style.buttonRow}>
        <button onClick={handleCancel} className={style.cancelButton}>
          Cancel
        </button>
        <button
          onClick={handleSave}
          className={style.saveButton}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
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
