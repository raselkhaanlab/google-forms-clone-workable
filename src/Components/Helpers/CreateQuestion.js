import generateKey from "components/Helpers/GenerateKey";
import { dropdownOptions } from "data/OptionTypes";
import createOption from "components/Helpers/CreateOption";

const createQuestion = (len) => {
  const question = {
    id: generateKey("question" + len),
    title: "Question",
    optionType: dropdownOptions[2].id,
    options: [createOption(0)],
    required: false,
  };
  return question;
};
export default createQuestion;
