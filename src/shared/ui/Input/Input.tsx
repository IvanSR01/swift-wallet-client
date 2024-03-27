import { FC, Ref, forwardRef, ChangeEvent, useState, useCallback } from "react";
import styles from "./Input.module.scss";
import { TypeInputProps } from "./Input.type";
import debounce from "lodash.debounce";
const Input: FC<TypeInputProps> = forwardRef(
  ({ placeholder, helperText, onChange, value, type, ...rest }, ref: any) => {
    return (
      <div className={styles.group}>
        <input
          type={type}
          ref={ref}
          className={styles.input}
					onChange={onChange}
					value={value}
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
