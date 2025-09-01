// React Icons For Nav And React.......................
import { FiUser } from "react-icons/fi";
import { VscSearch } from "react-icons/vsc";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsBag } from "react-icons/bs";

// Header Books Images
import HBook1 from "../assets/HeaderBooks/headerBook1.png";
import HBook2 from "../assets/HeaderBooks/headerBook2.png";
import HBook3 from "../assets/HeaderBooks/headerBook3.png";

// Brands Images
import Brand1 from "../assets/Brands/brand1.png";
import Brand2 from "../assets/Brands/brand2.png";
import Brand3 from "../assets/Brands/brand3.png";
import Brand4 from "../assets/Brands/brand4.png";
import Brand5 from "../assets/Brands/brand5.png";

// Featured Books Images
import FeaturedBooks1 from "../assets/FeaturedBooksImages/FeaturedBook1.png";
import FeaturedBooks2 from "../assets/FeaturedBooksImages/FeaturedBook2.png";
import FeaturedBooks3 from "../assets/FeaturedBooksImages/FeaturedBook3.png";
import FeaturedBooks4 from "../assets/FeaturedBooksImages/FeaturedBook4.png";
import FeaturedBooks5 from "../assets/FeaturedBooksImages/FeaturedBook5.png";

// Selling Book Image
import sellingBookimage from "../assets/SellingBookImage/sellingBook.png";

// Popular Books Images
import popularbook1 from "../assets/PopularBooksImage/book1.png";
import popularbook2 from "../assets/PopularBooksImage/book2.png";
import popularbook3 from "../assets/PopularBooksImage/book3.png";
import popularbook4 from "../assets/PopularBooksImage/book4.png";
import popularbook5 from "../assets/PopularBooksImage/book5.png";
import popularbook6 from "../assets/PopularBooksImage/book6.png";
import popularbook7 from "../assets/PopularBooksImage/book7.png";
import popularbook8 from "../assets/PopularBooksImage/book8.png";

// Latest Articles Images
import ArticleImage1 from "../assets/letestArticlesIamge/ArticleImage1.png";
import ArticleImage2 from "../assets/letestArticlesIamge/ArticleImage2.png";
import ArticleImage3 from "../assets/letestArticlesIamge/ArticleImage3.png";

// React Icons for Footer
import { ImFacebook, ImBehance } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";


// Navigation Links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "All Books", path: "/allbooks" },
  { name: "Review", path: "/review" },
];

// Navigation Right Links
export const navRight = {
  managements: [
    { id: 1, icon: FiUser, link: "/login" },
    { id: 3, icon: MdAdminPanelSettings, link: "/admin" },
  ],
};

// Header Books Data
export const headerBooks = [
  {
    id: 1,
    img: HBook1,
    title: "Life of the wild",
    info: "Lorem ipsum...",
    btnLink: "*",
  },
  {
    id: 2,
    img: HBook2,
    title: "Simple way of peace life",
    info: "Lorem ipsum...",
    btnLink: "*",
  },
  {
    id: 3,
    img: HBook3,
    title: "Great travel at desert",
    info: "Lorem ipsum...",
    btnLink: "*",
  },
];

// Brands Data
export const brandsData = [
  { id: 1, img: Brand1 },
  { id: 2, img: Brand2 },
  { id: 3, img: Brand3 },
  { id: 4, img: Brand4 },
  { id: 5, img: Brand5 },
];

// Featured Books Data
export const featuredBooksData = [
  {
    id: 1,
    img: FeaturedBooks1,
    imgLink: "*",
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
  },
  {
    id: 2,
    img: FeaturedBooks2,
    imgLink: "*",
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
  },
  {
    id: 3,
    img: FeaturedBooks3,
    imgLink: "*",
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
  },
  {
    id: 4,
    img: FeaturedBooks4,
    imgLink: "*",
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
  },
  {
    id: 5,
    img: FeaturedBooks5,
    imgLink: "*",
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
  },
];

// Selling Books Data
export const sellingBooksData = [
  {
    id: 1,
    img: sellingBookimage,
    infoTitleTop: "By Timbur Hood",
    infoTitle: "Birds gonna be happy",
    desc: "Lorem ipsum...",
    price: "$ 45.00",
    shopbtnLink: "*",
  },
];

// Popular Books Data
export const galleryData = [
  {
    id: 1,
    name: "Great travel at desert",
    writer: "Sanchit Howdy",
    price: "$ 38.00",
    category: "Business",
    image: popularbook1,
  },
  // Add the rest here...
];

// Quote Data
export const quoteData = [
  {
    id: 1,
    quote: "“It's my birthday give me money and protien”",
    speaker: "Dr. Souvik Panja",
  },
  {
    id: 2,
    quote:
      "“If you want to beat in coding then come to my home and ask my mother!”",
    speaker: "Mr. Suman Patra",
  },
  {
    id: 3,
    quote: "“Don't angry me Ami rege gele kintu khub kharap hobey..”",
    speaker: `Dr. Soumi ma'am`,
  },
];

// Latest Article Data
export const lettestArticleData = [
  {
    id: 1,
    title: "Reading books always makes moments happy",
    image: ArticleImage1,
    titLink: "#",
    date: "2 Aug, 2021",
    inspiration: "Inspiration",
  },
  // Add the rest here...
];

// Footer Links Data
export const FootersLinksData = {
  Aboutus: [
    { linkname: "Vision", link: "*" },
    { linkname: "Articles", link: "*" } /* Add the rest here... */,
  ],
  Discover: [{ linkname: "Home", link: "*" } /* Add the rest here... */],
  Myaccount: [{ linkname: "Sign In", link: "*" } /* Add the rest here... */],
  Help: [{ linkname: "Help center", link: "*" } /* Add the rest here... */],
  socials: [
    { icon: ImFacebook, link: "https://www.facebook.com" },
    { icon: FiInstagram, link: "https://www.instagram.com" },
    // Add the rest here...
  ],
};
