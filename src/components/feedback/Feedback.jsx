import PropTypes from "prop-types";
import css from "./feedback.module.css";

const Feedback = ({ values, total, positive }) => {
  const [good, neutral, bad] = values;
  return (
    <div className={css["stat-list"]}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

Feedback.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
