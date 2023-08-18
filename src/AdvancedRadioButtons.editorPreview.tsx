import { ReactElement, createElement } from "react";
import { RadioButtons } from "./components/RadioButtons";
import { AdvancedRadioButtonsPreviewProps } from "../typings/AdvancedRadioButtonsProps";

export function preview(props: AdvancedRadioButtonsPreviewProps): ReactElement {
    return <RadioButtons
        className={props.class}
        readOnlyAsText={props.readOnlyStyle == 'text'}
        readOnly={props.readOnly}
        orientation={props.orientation}
        showLabel={props.showLabel}
        labelCaption={props.labelCaption}
        previewValueAsText={`[${props.attributeValue}]`}
        ariaRequired={props.ariaRequired}
        style={props.styleObject}
    />;
}

export function getPreviewCss(): string {
    return require("./ui/AdvancedRadioButtons.css");
}
