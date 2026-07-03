import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
// import { Footer } from "../components/Footer"
import useFetchStarWars from "../hooks/useFetchStarWars"

export const Layout = () => {
    useFetchStarWars()
    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
            {/*<Footer />*/}
        </ScrollToTop>
    )
}