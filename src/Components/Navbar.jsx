import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

export const Navbar = () => {
	const [onScrolled, setOnScrolled] = useState(false);
	const [collapsed, setCollapsed] = useState(true);
	const { user, logOut } = UserAuth();

	const toggleLinks = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setOnScrolled(true);
			} else {
				setOnScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${onScrolled && "bg-gradient-to-t from-[#141414] to-[#060606]"}`}>
			<div className="flex items-center space-x-2 md:space-x-10">
				<Link to="/">
					<img
						className="object-contain cursor-pointer"
						src="https://rb.gy/ulxxee"
						width={100}
						alt="Netflix Logo"
					/>
				</Link>
				<button
					className="flex justify-center items-center text-xs text-white px-2 md:hidden"
					onClick={toggleLinks}>
					Browse <ChevronDownIcon className="w-5 h-5" />
				</button>
				<div className={`navbar-collapse ${collapsed ? "collapse" : ""}`}>
					<ul className="absolute top-16 left-[1px] flex flex-col">
						<Link to="/">
							<li className="toggleLink">Home</li>
						</Link>
						<Link to="/series">
							<li className="toggleLink">Series</li>
						</Link>
						<Link to="/films">
							<li className="toggleLink">Films</li>
						</Link>
						<Link to="/latest">
							<li className="toggleLink">New & Popular</li>
						</Link>
						{user?.email ? (
							<Link to="/my-list">
								<li className="toggleLink">My List</li>
							</Link>
						) : null}
					</ul>
				</div>

				<ul className="hidden space-x-4 md:flex">
					<Link to="/">
						<li className="headerLink">Home</li>
					</Link>
					<Link to="/series">
						<li className="headerLink">Series</li>
					</Link>
					<Link to="/films">
						<li className="headerLink">Films</li>
					</Link>
					<Link to="/latest">
						<li className="headerLink">New & Popular</li>
					</Link>
					{user?.email ? (
						<Link to="/my-list">
							<li className="headerLink">My List</li>
						</Link>
					) : null}
				</ul>
			</div>

			{user?.email ? (
				<div className="flex items-center space-x-4 text-sm">
					<MagnifyingGlassIcon className="hidden w-7 h-7 sm:inline cursor-pointer" />
					<p className="hidden lg:inline cursor-pointer">Children</p>

					<Link to="/account">
						<img className="cursor-pointer rounded" src="https://rb.gy/g1pwyx" alt="Account Icon" />
					</Link>
				</div>
			) : (
				<div className="flex items-center space-x-4 text-sm">
					<MagnifyingGlassIcon className="hidden w-7 h-7 sm:inline cursor-pointer" />
					<p className="hidden lg:inline cursor-pointer">Children</p>
					<Link to="/login">
						<button className="text-white">Sign In</button>
					</Link>
					<Link to="/signup">
						<button className="bg-[#e50914] px-5 py-2 rounded text-white">Sign Up</button>
					</Link>
				</div>
			)}
		</header>
	);
};
