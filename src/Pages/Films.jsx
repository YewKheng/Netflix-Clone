import { Helmet } from "react-helmet";
import { Banner } from "../Components/Banner";
import { Navbar } from "../Components/Navbar";
import { Selections } from "../Components/Selections";
import { AuthContextProvider } from "../Context/AuthContext";
import requests from "../requests";

export const Films = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
			<Helmet>
				<title>Films - Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<AuthContextProvider>
				<Navbar />
			</AuthContextProvider>

			<main className="relative px-4 md:px-12">
				<Banner />
				<section className="md:space-y-8 xxxl:space-y-32">
					<Selections rowID="1" genre="Top Rated" fetchURL={requests.requestTopRatedMovies} />
					<Selections rowID="2" genre="Trending" fetchURL={requests.requestTrendingMovies} />
					<Selections
						rowID="3"
						genre="Netflix Originals"
						fetchURL={requests.requestNetflixOriginals}
					/>
					<Selections rowID="4" genre="Animation" fetchURL={requests.requestAnimationMovies} />
					<Selections rowID="5" genre="Action" fetchURL={requests.requestActionMovies} />
					<Selections rowID="6" genre="Comedy" fetchURL={requests.requestComedyMovies} />
					<Selections rowID="7" genre="TV Movie" fetchURL={requests.requestTVMovie} />
					<Selections rowID="8" genre="Horror" fetchURL={requests.requestHorrorMovies} />
					<Selections
						rowID="9"
						genre="Science Fiction"
						fetchURL={requests.requestScienceFictionMovies}
					/>
					<Selections rowID="10" genre="Romance" fetchURL={requests.requestRomanceMovies} />
				</section>
			</main>
		</div>
	);
};
