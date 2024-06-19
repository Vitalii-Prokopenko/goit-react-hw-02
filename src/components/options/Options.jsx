import PropTypes from "prop-types";
import css from "./options.module.css";

const Options = ({ options, total, onLeaveFeedback, onResetFeedback }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <button
            className={css["btn"]}
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {total > 0 && (
        <button className={css["btn"]} type="button" onClick={onResetFeedback}>
          reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
};

export default Options;
