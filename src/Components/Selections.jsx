import { useState, useEffect } from "react";
import axios from "axios";
import { Thumbnail } from "./Thumbnail";

export const Selections = ({ genre, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	const slideLeft = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft - innerWidth + 90;
	};

	const slideRight = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft + innerWidth - 90;
	};

	return (
		<div className="h-48 space-y-0.5 md:space-y-2">
			<h2 className="w-56 text-sm font-semibold text-[#e5e5e5] cursor-pointer transition duration-200 hover:text-white sm:text-lg md:text-2xl">
				{genre}
			</h2>

			<div className="relative group">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="slideArrow left-2 hidden md:block"
					onClick={slideLeft}>
					<path strokeLinecap="square" strokeLinejoin="miter" d="M15.75 19.5L8.25 12l7.5-7.5" />
				</svg>

				<div
					id={"slider" + rowID}
					className="flex items-center space-x-2 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide">
					{movies.map((movie) => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</div>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="slideArrow right-2 hidden md:block"
					onClick={slideRight}>
					<path strokeLinecap="square" strokeLinejoin="miter" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
				</svg>
			</div>
		</div>
	);
};
