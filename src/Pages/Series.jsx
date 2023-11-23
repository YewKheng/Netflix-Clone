import { Helmet } from "react-helmet";
import { Banner } from "../Components/Banner";
import { Navbar } from "../Components/Navbar";
import { Selections } from "../Components/Selections";
import { AuthContextProvider } from "../Context/AuthContext";
import requests from "../requests";

export const Series = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
			<Helmet>
				<title>Series - Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<AuthContextProvider>
				<Navbar />
			</AuthContextProvider>

			<main className="relative px-4 md:px-12">
				<Banner />
				<section className="md:space-y-8 xxxl:space-y-32">
					<Selections rowID="1" genre="Top Rated" fetchURL={requests.requestTopRatedSeries} />
					<Selections rowID="2" genre="Popular" fetchURL={requests.requestPopularSeries} />
					<Selections rowID="3" genre="Mystery" fetchURL={requests.requestMysterySeries} />
					<Selections rowID="4" genre="Action" fetchURL={requests.requestActionSeries} />
					<Selections rowID="5" genre="Animation" fetchURL={requests.requestAnimationSeries} />
					<Selections rowID="6" genre="Crime" fetchURL={requests.requestCrimeSeries} />
					<Selections rowID="7" genre="Comedy" fetchURL={requests.requestComedySeries} />
					<Selections rowID="8" genre="Drama" fetchURL={requests.requestDramaSeries} />
					<Selections rowID="8" genre="Reality" fetchURL={requests.requestRealitySeries} />
				</section>
			</main>
		</div>
	);
};
