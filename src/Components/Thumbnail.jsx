import { baseURL } from "../BaseURL/imageBaseUrl";
import { useState } from "react";
import { PlusCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const Thumbnail = ({ movie }) => {
	const [save, setSave] = useState(false);
	const [watchList, setWatchList] = useState(false);
	const { user } = UserAuth();

	const showID = doc(db, "users", `${user?.email}`);

	const saveToWatchList = async () => {
		if (user?.email) {
			setSave(!save);
			setWatchList(true);
			await updateDoc(showID, {
				watchListed: arrayUnion({
					id: movie.id,
					title: movie.title || movie.name,
					img: movie.backdrop_path,
				}),
			});
		} else {
			alert(
				"Please log in if you are an existing user to save a show to your watchlist. Please sign up if you do not have an account."
			);
		}
	};

	return (
		<div className="relative min-w-[230px] cursor-pointer transition duration-200 ease-out md:hover:scale-105 xxxl:min-w-[360px]">
			<img
				className="rounded-sm md:rounded object-cover"
				src={`${baseURL}/w500/${movie?.backdrop_path}`}
				alt={movie?.title || movie?.name}
			/>
			<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
				<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
					{movie?.title || movie?.name}
				</p>
				<button onClick={saveToWatchList}>
					{save ? (
						<CheckCircleIcon className="absolute w-6 top-3 left-3 text-white" />
					) : (
						<PlusCircleIcon className="absolute w-6 top-3 left-3 text-white" />
					)}
				</button>
			</div>
		</div>
	);
};
