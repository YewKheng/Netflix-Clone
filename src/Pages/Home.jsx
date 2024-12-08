import { Helmet } from "react-helmet";
import { Banner } from "../Components/Banner";
import { Navbar } from "../Components/Navbar";
import { Selections } from "../Components/Selections";
import { AuthContextProvider } from "../Context/AuthContext";
import requests from "../requests";

export const Home = () => {
	return (
		<div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
			<Helmet>
				<title>Home - Netflix</title>
				<link rel="icon" href="/netflix-logo.png" />
			</Helmet>

			<AuthContextProvider>
				<Navbar />
			</AuthContextProvider>

			<main className="relative px-4 md:px-12">
				<Banner />
				<section className="md:space-y-8 xxxl:space-y-32">
					<Selections rowID="1" genre="Trending Movies" fetchURL={requests.requestTrendingMovies} />
					<Selections
						rowID="2"
						genre="Top Rated Movies"
						fetchURL={requests.requestTopRatedMovies}
					/>
					<Selections rowID="3" genre="Action Movies" fetchURL={requests.requestActionMovies} />
					<Selections
						rowID="4"
						genre="Animation Movies"
						fetchURL={requests.requestAnimationMovies}
					/>
					<Selections
						rowID="5"
						genre="Top Rated Series"
						fetchURL={requests.requestTopRatedSeries}
					/>
					<Selections rowID="6" genre="Popular Series" fetchURL={requests.requestPopularSeries} />
					<Selections rowID="7" genre="Drama Series" fetchURL={requests.requestDramaSeries} />
				</section>
			</main>
		</div>
	);
};
