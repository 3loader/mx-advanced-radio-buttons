import { ReactElement, createElement } from "react";
import classNames from "classnames";

export interface AlertProps {
    id?: string;
    message?: string;
    className?: string;
    bootstrapStyle: "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";
}

export function Alert({id, message, className, bootstrapStyle }: AlertProps): ReactElement | null {
    if (!message) {
        return null;
    }
    return <div
        id={`${id || 'no-id'}-error`}
        className={classNames(`alert alert-${bootstrapStyle}`, className)}
        role={"alert"}
    >
        {message}
    </div>;
}
