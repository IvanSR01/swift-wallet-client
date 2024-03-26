import { FC, Ref, forwardRef, ChangeEvent, useState, useCallback } from "react";
import styles from "./Input.module.scss";
import { TypeInputProps } from "./Input.type";
import debounce from "lodash.debounce";
const Input: FC<TypeInputProps> = forwardRef(
  (
    { placeholder, helperText, ...rest},
    ref: any
  ) => {
    return (
      <div className={styles.group}>
        <input
					ref={ref}
          className={styles.input}
          placeholder={placeholder}
					{...rest}
        />
        {helperText && <label>{helperText}</label>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
