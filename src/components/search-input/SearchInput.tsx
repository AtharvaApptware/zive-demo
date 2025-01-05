import React from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  SxProps,
  Theme,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  sx?: SxProps<Theme>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  startAdornmentPosition?: "start" | "end";
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  onChange,
  value,
  sx,
  inputProps,
  startAdornmentPosition = "start",
}) => (
  <FormControl
    sx={{ m: 1, width: "210px", height: "40px", ...sx }}
    variant="outlined"
  >
    <OutlinedInput
      value={value}
      onChange={onChange}
      startAdornment={
        <InputAdornment position={startAdornmentPosition}>
          <SearchOutlinedIcon />
        </InputAdornment>
      }
      placeholder={placeholder}
      sx={{ height: "40px" }}
      inputProps={inputProps}
    />
  </FormControl>
);

export default SearchInput;
