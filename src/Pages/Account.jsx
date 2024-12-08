import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export const Account = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="bg-[#f2f2f2]">
			<Helmet>
				<title>Account Settings - Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<header className={`bg-[#080808] px-0 py-0 md:px-12 md:py-5 lg:py-5`}>
				<Link to="/">
					<img
						src="https://rb.gy/ulxxee"
						alt="Netflix Logo"
						width={120}
						className="pl-2 pt-3 pb-2 object-contain cursor-pointer md:pl-0 md:pt-0 md:pb-0"
					/>
				</Link>
				<Link to="/account">
					<img
						src="https://rb.gy/g1pwyx"
						alt="Account Icon"
						className="w-11 cursor-pointer rounded md:w-8"
					/>
				</Link>
			</header>

			<main className="mx-auto max-w-6xl px-5 pt-[70px] pb-12 md:px-[45px] md:pt-[95px]">
				<div className="flex flex-col gap-x-4 gap-y-1 pb-4 md:flex-row">
					<h1 className="text-[#333333] text-2xl md:text-3xl">Account</h1>
					<div className="-ml-0.5 flex items-center gap-x-1.5">
						<img src="https://rb.gy/4vfk4r" alt="Membership Icon" className="h-7 w-7" />
						<p className="text-xs font-bold text-[#555555] md:font-extrabold">
							Member since {user.metadata.creationTime}
						</p>
					</div>
				</div>

				<div className="flex flex-col">
					<div className="bg-white mt-6 grid grid-cols-1 gap-x-4 border border-[#bfbfbf] px-4 py-4 md:bg-transparent md:grid-cols-3 md:border-x-0 md:border-transparent md:border-t md:border-b-0 md:px-0 md:pb-0">
						<h1 className="text-[#7a7a7a] text-lg font-medium pb-4">MEMBERSHIP & BILLING</h1>
						<div>
							<p className="text-[#333333] font-medium pb-3">{user.email}</p>
							<p className="text-[#7f7f7f] font-medium pb-3">Password: ********</p>
						</div>
					</div>
					<hr className="hidden md:inline-block" />
					<div className="bg-white mt-6 grid grid-cols-1 gap-x-4 border border-[#bfbfbf] px-4 py-4 md:bg-transparent md:grid-cols-3 md:border-x-0 md:border-transparent md:border-t md:border-b-0 md:px-0 md:pb-0">
						<h1 className="text-[#7a7a7a] text-lg font-medium pb-4">SECURITY & PRIVACY</h1>
						<p className="text-[#4d4d4d] font-medium pb-4">Control access to this account.</p>
						<hr className="md:hidden" />
						<p
							className="text-[#4d4d4d] font-medium pt-4 pb-7 cursor-pointer hover:underline md:pt-0 md:text-right"
							onClick={handleLogOut}>
							Sign out of all devices
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};
