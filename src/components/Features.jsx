import style from "../styles/Features.module.css";
import { FaPiggyBank } from "react-icons/fa";

function Features() {
  return (
    <div className={style.features}>
      <div className={style.leftSide}>
        <h1 className={style.titleText}>Comprehensive Dashboard</h1>
        <h2 className={style.subText}>
          See all your financial details in one place.
        </h2>
        <h1 className={style.titleText}>Interactive Graphs</h1>
        <h2 className={style.subText}>
          Visualize your income, spending, and savings trends.
        </h2>
        <h1 className={style.titleText}>Transaction History</h1>
        <h2 className={style.subText}>
          Easily track and categorize your expenses.
        </h2>
      </div>
      <div className={style.rightSide}>
        <FaPiggyBank className={style.piggyBank} />
        <FaPiggyBank className={style.piggyBank} />
        <FaPiggyBank className={style.piggyBank} />
      </div>
    </div>
  );
}

export default Features;
