/**
 * This file was generated from AdvancedRadioButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";

export type OrientationEnum = "horizontal" | "vertical";

export type ReadOnlyStyleEnum = "control" | "text";

export interface AdvancedRadioButtonsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    orientation: OrientationEnum;
    attributeValue: EditableValue<boolean | string>;
    showLabel: boolean;
    labelCaption?: DynamicValue<string>;
    readOnlyStyle: ReadOnlyStyleEnum;
    ariaRequired: boolean;
}

export interface AdvancedRadioButtonsPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    orientation: OrientationEnum;
    attributeValue: string;
    showLabel: boolean;
    labelCaption: string;
    readOnlyStyle: ReadOnlyStyleEnum;
    ariaRequired: boolean;
    onChangeAction: {} | null;
}
