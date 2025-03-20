import style from "../styles/Features.module.css";
import { FcBullish, FcRules, FcTemplate } from "react-icons/fc";

function Features() {
  return (
    <div className={style.features}>
      <div className={style.featureRow}>
        <div className={style.leftSide}>
          <h1 className={style.titleText}>Comprehensive Dashboard</h1>
          <h2 className={style.subText}>
            Get a clear and detailed view of your financial health with our
            comprehensive dashboard. Track your income, expenses, savings, and
            investment accounts effortlessly. Customize your dashboard to
            highlight the information most relevant to you, whether it’s
            upcoming bills, recent transactions, or spending categories.
          </h2>
        </div>
        <div className={style.rightSide}>
          <FcTemplate className={style.icon} />
        </div>
      </div>

      <div className={style.featureRow}>
        <div className={style.leftSide}>
          <h1 className={style.titleText}>Interactive Graphs</h1>
          <h2 className={style.subText}>
            Explore dynamic, interactive graphs that make financial analysis
            simple and intuitive. Dive deep into your income streams, spending
            habits, and savings progress with a visual breakdown. Adjust
            timeframes, categories, or filters to gain actionable insights and
            improve your financial decisions.
          </h2>
        </div>
        <div className={style.rightSide}>
          <FcBullish className={style.icon} />
        </div>
      </div>

      <div className={style.featureRow}>
        <div className={style.leftSide}>
          <h1 className={style.titleText}>Transaction History</h1>
          <h2 className={style.subText}>
            Review your complete transaction history with detailed
            categorization for better financial understanding. Search and filter
            transactions by date, category, or amount to stay on top of your
            spending. Add personalized tags or notes to your transactions for
            easier tracking and organization.
          </h2>
        </div>
        <div className={style.rightSide}>
          <FcRules className={style.icon} />
        </div>
      </div>
    </div>
  );
}

export default Features;
