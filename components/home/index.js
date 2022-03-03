import Header from "./homepage1/Header"
import HeaderBody from "./homepage1/headerBody";
import AmericanExpress from "./homepage1/americanExpress";
import BrowseCategory from "./homepage1/browseCategory";
import TopSelling from "./homepage1/topSelling";
import Sports from "./homepage1/sports";
import ArtsTheater from "./homepage1/artsTheater";
import Family from "./homepage1/family";
import DiscoverMoreEvents from "./homepage1/discoverMoreEvents";


const Home = () => {
  return (
    <>
        <Header />
        <HeaderBody />
        <AmericanExpress />
        <BrowseCategory />
        <TopSelling />
        <Sports />
        <ArtsTheater />
        <Family />
        <DiscoverMoreEvents />
    </>
  )
}
export default Home