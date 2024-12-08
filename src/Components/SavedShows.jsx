import { baseURL } from "../BaseURL/imageBaseUrl";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../fireBase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";

export const SavedShows = () => {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setMovies(doc.data()?.watchListed);
		});
	}, [user?.email]);

	const movieRef = doc(db, "users", `${user?.email}`);
	const deleteWatchList = async (passedID) => {
		try {
			const result = movies.filter((movie) => movie.id !== passedID);
			await updateDoc(movieRef, {
				watchListed: result,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="relative pt-36 px-4 md:pt-40 md:px-12 lg:pt-60">
			<div className="grid grid-cols-2 gap-x-2 gap-y-14 pb-20 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6">
				{movies.map((movie) => (
					<div
						key={movie.id}
						className="relative max-w-[230px] cursor-pointer transition duration-200 ease-out md:hover:scale-105 lg:max-w-none lg:min-w-[230px] xxxl:min-w-[360px]">
						<img
							className="rounded-sm md:rounded object-cover"
							src={`${baseURL}/w500/${movie?.img}`}
							alt={movie?.title || movie?.name}
						/>
						<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
							<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
								{movie?.title || movie?.name}
							</p>
							<p>
								<XMarkIcon
									className="absolute w-5 h-5 top-2 right-2 z-10"
									onClick={() => deleteWatchList(movie.id)}></XMarkIcon>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
