import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { NavItems } from "../navbar/index.styled";
import Profile from "../../assets/Profile.svg";
import { Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Colors from "../../utilities/commonCss/colors";
import createUser from "../../../firebase/createAccount";
import signIn from "../../../firebase/loginUser";
import userHook from "../../hooks/userHook";
import authReducer, { initialStateUser } from "../../reducer/authReducer";
import { writeUserData } from "../../../firebase/database";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  borderRadius: "5px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginInput = styled(TextField, {
  name: "InputFields",
})({ width: "100% !important" });

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(true);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const { setUserReducer } = userHook();
  const [state] = React.useReducer(authReducer, initialStateUser);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name } = e.target;
    if (name === "email") {
      setUser({ ...user, email: e.target.value });
    } else {
      setUser({ ...user, password: e.target.value });
    }
  };
  const LoginHandle = async () => {
    console.log("Login handle clicked");
    const { email, password } = user;
    try {
      const user = await signIn(email, password);
      const userInfo = user ? user.uid : null;
      // writeUserData(userInfo);
      console.log(userInfo);
      setUserReducer(userInfo);
    } catch (error) {
      console.log(error.message);
    }
  };
  const RegisterHandle = () => {
    console.log("Register handle clicked");
    const { email, password } = user;
    createUser(email, password);
  };

  return (
    <div>
      <NavItems onClick={handleOpen} id="profile">
        <img src={Profile} alt="Login to your profile" id="profile" />
      </NavItems>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ color: Colors.primaryYellow, fontWeight: 900 }}
            gutterBottom={true}
          >
            {state?.loggedIn ? "Logout" : "Welcome"}
          </Typography>
          ;
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <LoginInput
              error={false}
              id="outlined-error-helper-text"
              label="User Email"
              value={user.email}
              name="email"
              placeholder="Enter your email address"
              onChange={(e) => handleChange(e)}
              InputLabelProps={{ sx: { color: "#fff" } }}
            />
            <LoginInput
              id="Password"
              label="Password"
              value={user.password}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => handleChange(e)}
              InputLabelProps={{ sx: { color: "#fff" } }}
            />
            {!isLogin && (
              <LoginInput
                id="Password"
                label="Re-Password"
                placeholder="Enter your password again"
                InputLabelProps={{ sx: { color: "#fff" } }}
              />
            )}
            <Button
              sx={{ backgroundColor: "red" }}
              type="submit"
              onClick={isLogin ? LoginHandle : RegisterHandle}
            >
              {isLogin ? "Login" : "Register"}
            </Button>
            <Typography
              variant="subtitle2"
              component="h6"
              onClick={() => setIsLogin((prev) => !prev)}
              sx={{
                color: Colors.primaryYellow,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {isLogin ? "Dont have an account" : "Already have an account"}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
