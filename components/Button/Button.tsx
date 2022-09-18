import React from "react";
import {
  TButtonSizeVariants,
  TButtonStates,
  TButtonStyleVariants,
} from "./TButton";

import { buttonStyles } from "./Button.css";

export type TButtonProps = {
  /**
   * Current Button state value. For example: enabled, disabled
   */
  buttonState?: keyof TButtonStates;
  /**
   * display text
   */
  label: string;
  /**
   * onclick handler
   */
  onClick?: () => void;
  /**
   * Button size variant
   */
  sizeVariant?: keyof TButtonSizeVariants;
  /**
   * Button style variant
   */
  styleVariant?: keyof TButtonStyleVariants;
};

export const Button: React.FC<TButtonProps> = ({
  buttonState = "enabled",
  label,
  onClick,
  sizeVariant = "large",
  styleVariant = "primary",
}) => {
  return (
    <button
      disabled={buttonState === "disabled"}
      onClick={onClick}
      className={`${buttonStyles({
        sizeVariant: sizeVariant,
        styleVariant: styleVariant,
      })}`}
    >
      {label}
    </button>
  );
};
