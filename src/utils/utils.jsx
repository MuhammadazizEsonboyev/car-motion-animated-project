/* eslint-disable no-unused-vars */
import { car1, car2, car3, car4} from "../assets";
import TermsConditions from "../components/Terms and Conditions/TermsConditions";
import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";

export const navbar = [
    {
        path: '/home',
        element: <HomePage />,
        name: "Home",
        id: 1
    },
    {
        path: '/cars',
        element: <CarsPage />,
        name: "Cars",
        id: 2
    },
    {
        path: '/book',
        element: <BookNowPage />,
        name: "Book now",
        id: 3
    },
    {
        path: '/terms',
        element: <TermsConditions />,
        name: "Terms and Conditions",
        id: 4
    },
]

export const sectionCarImage = [
    {
        img: car1,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover" 
    },
    {
        img: car2,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover" 
    },
    {
        img: car3,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover" 
    },
    {
        img: car4,
        text_hover_top: "Supercars",
        text_hover_bottom: "Discover" 
    },
]