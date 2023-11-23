import { Helmet } from "react-helmet";
import { WatchListNavBar } from "../Components/WatchListNavBar";
import { AuthContextProvider } from "../Context/AuthContext";
import { SavedShows } from "../Components/SavedShows";

export const WatchList = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
			<Helmet>
				<title>Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<AuthContextProvider>
				<WatchListNavBar />
			</AuthContextProvider>
			
			<SavedShows />
		</div>
	);
};
