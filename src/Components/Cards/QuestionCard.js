import PropTypes from "prop-types";
import { useState } from "react";
import CustomDropdown from "components/Dropdown/CustomDropdown";
import OptionCard from "./Options/Option";
import { dropdownOptions } from "data/OptionTypes";

const QuestionCard = ({ question, selected }) => {
  const [myOptionType, setMyOptionType] = useState(question.optionType);
  const [questionTitle, setQuestionTitle] = useState(question.title);

  const handleTitleChange = (e) => {
    setQuestionTitle(e.target.value);
  };

  return (
    <div
      className={`p-6 rounded-lg border border-hoverGrey bg-white my-4 ${
        selected ? "selected-card" : ""
      }`}
    >
      {selected ? (
        <div className="">{question.title}</div>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full">
            <input
              className="w-2/3 p-3 bg-grey border-fontGrey border-b focus:outline-none textField focus:border-b-2"
              placeholder="Question"
              value={questionTitle}
              onChange={(e) => handleTitleChange(e)}
            />
            <CustomDropdown
              options={dropdownOptions}
              setSelected={setMyOptionType}
              defaultSelected={myOptionType}
            />
          </div>
          <div className="w-full">
            {question.options.map((op) => (
              <OptionCard
                key={op.id}
                options={question.options}
                type={myOptionType.text}
              />
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
};

QuestionCard.defaultProps = {
  question: {
    title: "Untitles Question",
    optionType: dropdownOptions[2],
    options: [{ text: "Option 1" }],
  },
  selected: false,
};
QuestionCard.propTypes = {
  question: PropTypes.object,
  selected: PropTypes.bool,
};

export default QuestionCard;