import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../Context/AuthContext";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { user, logIn } = UserAuth();
	const navigate = useNavigate();

	const onSubmit = async (event) => {
		event.preventDefault();
		setError("");
		try {
			await logIn(email, password);
			navigate("/");
		} catch (error) {
			setError("error");
		}
	};

	return (
		<div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
			<Helmet>
				<title>Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<img
				className="absolute w-full h-full hidden opacity-60 -z-10 object-cover sm:inline"
				src="https://rb.gy/p2hphi"
				alt="Login Background"
			/>
			<Link to="/">
				<img
					className="absolute w-24 top-6 left-4 object-contain cursor-pointer sm:w-44 md:top-6 md:left-6"
					src="https://rb.gy/ulxxee"
					alt="Netflix Logo"
				/>
			</Link>

			<form
				className="relative mt-5 rounded py-10 px-7 sm:mt-10 md:bg-black/70 md:mt-0 md:max-w-lg md:px-[75px]"
				onSubmit={onSubmit}>
				<h1 className="text-4xl mt-8 mb-10">Sign In</h1>
				<div className="space-y-5">
					<label className="inline-block w-full">
						<input
							type="email"
							placeholder="Email"
							className={`input ${error && "border-b-[3px] border-[#e87c03]"}`}
							onChange={(event) => setEmail(event.target.value)}
						/>
						{error ? (
							<p className="p-1 text-sm font-light text-[#e87c03]">Please enter a valid email.</p>
						) : null}
					</label>
					<label className="inline-block w-full">
						<input
							type="password"
							placeholder="Password"
							autoComplete="current-password"
							className={`input ${error && "border-b-[3px] border-[#e87c03]"}`}
							onChange={(event) => setPassword(event.target.value)}
						/>
						{error ? (
							<p className="p-1 text-sm font-light  text-[#e87c03]">
								Your password must contain between 4 and 60 characters.
							</p>
						) : null}
					</label>
				</div>

				<button type="submit" className="w-full h-14 bg-[#e50914] rounded mt-11 py-3">
					Sign In
				</button>
				<div className="flex justify-between mt-3">
					<p className="text-[#b3b3b3] text-sm font-light">
						<input className="mr-1" type="checkbox" />
						Remember me
					</p>
					<p className="text-[#b3b3b3] text-sm font-light hover:underline cursor-pointer">
						Need help?
					</p>
				</div>
				<div className="text-[#737373] mt-4">
					New to Netflix?{" "}
					<Link className="text-white hover:underline" to="/signup">
						Sign up now
					</Link>
					.
				</div>
			</form>
		</div>
	);
};
