import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Series } from "./Pages/Series";
import { Films } from "./Pages/Films";
import { Latest } from "./Pages/Latest";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Account } from "./Pages/Account";
import { WatchList } from "./Pages/WatchList";
import { AuthContextProvider } from "./Context/AuthContext";

export const App = () => {
	return (
		<div>
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/series" element={<Series />} />
					<Route path="/films" element={<Films />} />
					<Route path="/latest" element={<Latest />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/account" element={<Account />} />
					<Route path="/my-list" element={<WatchList />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
};
