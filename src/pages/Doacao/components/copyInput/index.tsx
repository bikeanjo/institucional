import { TextField, styled } from "@mui/material";
import { Colors } from "@colors";

const CopyInput = styled(TextField)(() => ({
  width: "100%",
  backgroundColor: "#FFFFFF",
  border: `2px solid ${Colors["Orange_50"]}`,
  color: Colors["Orange_50"],
  borderRadius: 8,
  filter: "none",
  "& fieldset": {
    border: `none`,
    filter: "none",
  },
  "& input": {
    cursor: "pointer",
    filter: "none",
  },
  "& .MuiInputBase-root.Mui-disabled": {
    opacity: 1,
    filter: "none",
    color: Colors["Orange_50"],
    cursor: "pointer",
    WebkitTextFillColor: "black",
  },
  "& .Mui-disabled": {
    opacity: 1,
    filter: "none",
    color: Colors["Orange_50"],
    cursor: "pointer",
    WebkitTextFillColor: Colors["Orange_50"],
  },
  "& .MuiInputAdornment-root": {
    color: Colors["Orange_50"],
  },
  "& .MuiInputBase-input": {
    filter: "none",
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    color: Colors["Orange_50"],
    fontWeight: 600,
    padding: "16px 24px",
    "&:focus, &:hover": {
      borderColor: "#FFFFFF",
    },
  },
}));

export default CopyInput;
