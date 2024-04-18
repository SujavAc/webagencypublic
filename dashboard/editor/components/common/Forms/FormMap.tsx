import FileUploadField from "./FileUpload";
import InputField from "./Input";
import RTEEditor from "./RTE";
import RadioField from "./Radio";
import RatingField from "./Rating";
import SelectField from "./Select";
import SliderField from "./Slider";
import SwitchField from "./Switch";
import ToggleButtonField from "./ToggleButton";
import CheckboxGroup from "./Checkbox/CheckboxGroup";
import CheckboxField from "./Checkbox";

const FormMap = {
  input: InputField,
  checkboxgroup: CheckboxGroup,
  checkbox: CheckboxField,
  fileupload: FileUploadField,
  radio: RadioField,
  rating: RatingField,
  rte: RTEEditor,
  select: SelectField,
  slider: SliderField,
  switch: SwitchField,
  togglebutton: ToggleButtonField,
};

export default FormMap;
