import axios from "axios";
import requests from "../requests";
import { useEffect, useState } from "react";
import { baseURL } from "../BaseURL/imageBaseUrl";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const Banner = () => {
	const [bannerPosters, setBannerPosters] = useState([]);

	const poster = bannerPosters[Math.floor(Math.random() * bannerPosters.length)];

	useEffect(() => {
		axios.get(requests.requestNetflixOriginals).then((response) => {
			setBannerPosters(response.data.results);
		});
	}, []);

	return (
		<div className="flex flex-col justify-end space-y-2 py-14 sm:h-[58vh] sm:space-y-3 md:h-[68vh] md:space-y-4 lg:h-[85vh] lg:pb-12 xxl:pb-36 xxxl:h-[90vh] xxxl:pb-56">
			<div className="absolute top-0 left-0 w-screen -z-10">
				<img
					className="w-full h-full object-cover"
					src={`${baseURL}/original${poster?.backdrop_path}`}
					alt={poster?.title}
				/>
			</div>
			<h1 className="max-w-xs text-xl font-bold sm:max-w-md sm:text-2xl md:max-w-lg md:text-3xl lg:max-w-3xl lg:text-6xl xxxl:text-8xl">
				{poster?.title || poster?.original_title}
			</h1>
			<p className="max-w-xs text-xs text-shadow-md sm:max-w-md sm:text-sm md:max-w-lg md:text-sm lg:max-w-3xl lg:text-lg xxxl:max-w-5xl xxxl:text-2xl">
				{poster?.overview}
			</p>

			<div className="flex space-x-3">
				<button className="bannerButton bg-white text-black">
					<PlayIcon className="h-4 w-4 text-black md:h-8 md:w-8" /> Play
				</button>
				<button className="bannerButton bg-[gray]">
					<InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
					More Info
				</button>
			</div>
		</div>
	);
};
