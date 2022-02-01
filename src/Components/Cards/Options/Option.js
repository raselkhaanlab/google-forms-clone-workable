import PropTypes from "prop-types";
import IndividualOption from "./IndividualOption";
import { SHORT_ANSWER, PARAGRAPH, MULTIPLE_CHOICE } from "data/OptionTypes";

const addNewOption = () => {};
const OptionCard = ({ type, options, setOptions }) => {
  if (type === SHORT_ANSWER || type === PARAGRAPH)
    return <div>Short Anser</div>;
  else
    return (
      <div>
        {options.map((option) => (
          <IndividualOption key={option.id} type={type} option={option} />
        ))}
        <div
          className="hover:cursor-pointer text-blue"
          onClick={() => addNewOption()}
        >
          Add Options
        </div>
      </div>
    );
};

OptionCard.defaultProps = {
  type: MULTIPLE_CHOICE,
  options: [],
};
OptionCard.propTypes = {
  type: PropTypes.string,
  options: PropTypes.array,
  setOptions: PropTypes.func,
};
export default OptionCard;