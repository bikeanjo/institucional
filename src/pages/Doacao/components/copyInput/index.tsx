import { TextField, styled } from "@mui/material";

const CopyInput = styled(TextField)(() => ({
  width: "100%",
  backgroundColor: "#FFFFFF",
  border: "none",
  color: "#606060",
  borderRadius: 8,
  borderColor: "#FFFFFF",
  filter: "none",
  "& fieldset": {
    border: "none",
    filter: "none",
  },
  "& input": {
    cursor: "pointer",
    filter: "none",
  },
  "& .MuiInputBase-root.Mui-disabled": {
    opacity: 1,
    filter: "none",
    color: "#606060",
    cursor: "pointer",
    WebkitTextFillColor: "black",
  },
  "& .Mui-disabled": {
    opacity: 1,
    filter: "none",
    color: "#606060",
    cursor: "pointer",
    WebkitTextFillColor: "black",
  },
  "& .MuiInputAdornment-root": {
    color: "#1C1B1F",
  },
  "& .MuiInputBase-input": {
    filter: "none",
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: "#606060",
    fontWeight: 600,
    padding: "16px 24px",
    "&:focus, &:hover": {
      borderColor: "#FFFFFF",
    },
  },
}));

export default CopyInput;
