import { IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormWrapper from "../wrapper/wrapper.component";
import InputProps from "./input.types";

const FormInput = (props: InputProps) => {
  const {
    label,
    value,
    type = "text",
    name,
    color,
    hasIcon = false,
    iconPos = "end",
    icon,
    sx,
    className,
    inputLabelStyles,
    inputHelperTextStyles,
    ...rest
  } = props;

  //   For password
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={rest.control}
        defaultValue={rest.defaultValue}
        render={({ field, fieldState, formState }) => {
          return (
            <TextField
              {...field}
              ref={field.ref}
              value={value}
              label={label}
              id={label}
              placeholder={`Please enter your ${label}`}
              type={
                type !== "password" ? type : showPassword ? "text" : "password"
              }
              error={fieldState.invalid}
              helperText={
                fieldState?.error?.message &&
                `${fieldState?.error?.message + " "}`
              }
              multiline={rest.multiline || false}
              rows={rest.rows || "4"}
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
              }}
              InputProps={{
                startAdornment:
                  hasIcon && iconPos === "start" ? (
                    <InputAdornment position={iconPos}>{icon}</InputAdornment>
                  ) : null,

                endAdornment:
                  type === "password" ? (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </IconButton>
                    </InputAdornment>
                  ) : hasIcon && iconPos === "end" ? (
                    <InputAdornment position={iconPos}>{icon}</InputAdornment>
                  ) : null,
              }}
              sx={{ ...sx }}
              InputLabelProps={{ sx: { ...inputLabelStyles } }}
              FormHelperTextProps={{ sx: { ...inputHelperTextStyles } }}
              className={`${className} `}
              variant={rest.variant || "outlined"}
              fullWidth={rest.fullWidth || true}
              color={color}
              required={rest.required || false}
              disabled={rest.disabled || false}
              autoFocus={rest.autoFocus || false}
              autoComplete={rest.autoComplete || "off"}
            ></TextField>
          );
        }}
      ></Controller>
    </FormWrapper>
  );
};

export default React.memo(FormInput);
