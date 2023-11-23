import { Helmet } from "react-helmet";
import { Navbar } from "../Components/Navbar";
import { Selections } from "../Components/Selections";
import { AuthContextProvider } from "../Context/AuthContext";
import requests from "../requests";

export const Latest = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
			<Helmet>
				<title>Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<AuthContextProvider>
				<Navbar />
			</AuthContextProvider>

			<main className="relative px-4 pt-32 md:px-12">
				<section className="md:space-y-8 xxxl:space-y-32">
					<Selections rowID="1" genre="Popular" fetchURL={requests.requestTrendingMovies} />
					<Selections rowID="2" genre="Top Rated" fetchURL={requests.requestTopRatedMovies} />
					<Selections rowID="3" genre="Popular" fetchURL={requests.requestPopularSeries} />
				</section>
			</main>
		</div>
	);
};
