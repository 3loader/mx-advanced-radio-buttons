import { ReactElement, createElement } from "react";
import { RadioButtons } from "./components/RadioButtons";

import { AdvancedRadioButtonsContainerProps } from "../typings/AdvancedRadioButtonsProps";

import "./ui/AdvancedRadioButtons.css";

export function AdvancedRadioButtons(props: AdvancedRadioButtonsContainerProps): ReactElement {
    return <RadioButtons
        id={props.name}
        className={props.class}
        value={props.attributeValue}
        readOnlyAsText={props.readOnlyStyle == 'text'}
        readOnly={props.attributeValue.readOnly}
        tabIndex={props.tabIndex}
        orientation={props.orientation}
        showLabel={props.showLabel}
        labelCaption={props.labelCaption?.value}
        ariaRequired={props.ariaRequired}
        style={props.style}
    />;
}
