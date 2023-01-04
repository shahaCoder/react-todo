import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import {
	Alert,
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { MdVisibilityOff } from "react-icons/md";
import Visibility from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
const Settings = () => {
	const { getdata } = useContext(AuthContext);
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	const [dis, setDis] = useState(true);
	const [name, setName] = useState("");
	const [nameOut, setNameOut] = useState(false);
	const [nameError, setNameError] = useState("This Field can not be empty!");
	// email
	const [email, setEmail] = useState("");
	const [emailOut, setEmailOut] = useState(false);
	const [emailError, setEmailError] = useState(
		"This Field can not be empty!"
	);
	// password
	const [password, setPassword] = useState("");
	const [passwordOut, setPasswordOut] = useState(false);
	const [passwordError, setPasswordError] = useState(
		"This Field can not be empty!"
	);
	const [errored, setErrored] = useState(false);
	const [success, setSuccess] = useState(false);
	const [warning, setWarning] = useState(false);
	const blureHandler = (e) => {
		if (e.target.name === "name") {
			setNameOut(true);
			console.log(errored);
		} else if (e.target.name === "email") {
			setEmailOut(true);
		} else if (e.target.name === "password") {
			setPasswordOut(true);
		}
	};
	const inpValuehandler = (e) => {
		setName(e.target.value);
		const regex = /^[a-zA-Z\S]+$/;
		if (!regex.test(String(e.target.value).toLowerCase())) {
			setNameError("The name is invalid!");
		} else {
			setNameError("");
			setNameOut(false);
		}
	};
	const inputEmailHandler = (e) => {
		setEmail(e.target.value);
		const regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!regex.test(String(e.target.value).toLowerCase())) {
			setEmailError("The email is invalid!");
		} else {
			setEmailError("");
		}
	};
	const inputPasswordHandler = (e) => {
		setPassword(e.target.value);
		const regex = /^[A-Za-z]\w{7,14}$/;
		if (!regex.test(String(e.target.value).toLowerCase())) {
			setPasswordError("The password is invalid!");
			setErrored(true);
		} else {
			setPasswordError("");
		}
	};
	useEffect(() => {
		if (!name) {
			setDis(true);
		} else {
			if (!nameError && !emailError && !passwordError) {
				setDis(false);
			} else {
				setDis(true);
			}
		}

		if (!email) {
			setDis(true);
		}
		if (!password) {
			setDis(true);
		}
	}, [name, email, password, nameError, emailError, passwordError]);
	function getData2(e) {
		e.preventDefault();
		let obj = {
			id: uuidv4(),
		};
		let fm = new FormData(e.target);
		fm.forEach((value, key) => {
			obj[key] = value;
		});
		if (!name && !email && !password) {
			setWarning(true);
		} else {
			if (!nameError && !emailError && !passwordError) {
				localStorage.setItem("register-data", JSON.stringify(obj));
				setSuccess(true);
			} else {
				setWarning(true);
			}
		}
	}
	return (
		<div>
			<div className="settings-block">
				{success ? (
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setSuccess(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						You successfully changed your data.
					</Alert>
				) : null}
				{warning ? (
					<Alert
						severity="error"
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setWarning(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						This field can not be empty!
					</Alert>
				) : null}
				<h1>Settings</h1>
				<form onSubmit={(e) => getData2(e)}>
					<div className="user-info-field">
						<div className="user-img">
							<img
								src="/Icons/user.svg"
								alt="user"
								height="70px"
							/>
						</div>
						<TextField
							sx={{ width: 325 }}
							type="text"
							id="outlined-basic"
							label={getdata?.name}
							name="name"
							autoComplete="name"
							onChange={(e) => inpValuehandler(e)}
							value={name}
							onKeyUp={(e) => blureHandler(e)}
						/>
						{nameOut && nameError && (
							<p
								className="invalid-text"
								style={{ color: "red" }}
							>
								{nameError}
							</p>
						)}
					</div>
					<div className="user-info-field">
						<div className="user-img">
							<img
								src="/Icons/mail.svg"
								alt="user"
								height="70px"
							/>
						</div>
						<TextField
							sx={{ width: 325 }}
							id="outlined-error2"
							label={getdata?.email}
							name="email"
							type="email"
							autoComplete="email"
							value={email}
							onChange={(e) => inputEmailHandler(e)}
							onKeyUp={(e) => blureHandler(e)}
						/>
						{emailOut && emailError && (
							<p
								className="invalid-text"
								style={{ color: "red" }}
							>
								{emailError}
							</p>
						)}
					</div>
					<div className="user-info-field">
						<div className="user-img">
							<img
								src="/Icons/password.svg"
								alt="user"
								height="70px"
							/>
						</div>
						{/* <div className="user-name"> */}
						<FormControl variant="outlined">
							<InputLabel htmlFor="outlined-adornment-password">
								Password*
							</InputLabel>
							<OutlinedInput
								sx={{ width: 325 }}
								id="outlined-adornment-password"
								type={showPassword ? "text" : "password"}
								autoComplete="password"
								name="password"
								value={password}
								onChange={(e) => inputPasswordHandler(e)}
								onKeyUp={(e) => blureHandler(e)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<MdVisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Password*"
							/>
						</FormControl>
						{passwordOut && passwordError && (
							<p
								className="invalid-text"
								style={{ color: "red" }}
							>
								{passwordError}
							</p>
						)}
						{/* </div> */}
					</div>
					<Button
						variant="contained"
						type="onsubmit"
						disabled={dis}
						sx={{ width: "435px" }}
					>
						Save
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Settings;
