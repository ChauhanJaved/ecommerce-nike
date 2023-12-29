import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../../../public/icons";
import { customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../../public/images";
import  bigShoe1PNG  from "../../../public/images/big-shoe1.png";
import  bigShoe2PNG  from "../../../public/images/big-shoe2.png";
import  bigShoe3PNG  from "../../../public/images/big-shoe3.png";
type ImageType = React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>> | React.FunctionComponent<React.SVGProps<SVGSVGElement>> | string | StaticImageData;

const bigShoe1: ImageType = bigShoe1PNG;
const bigShoe2: ImageType = bigShoe2PNG;
const bigShoe3: ImageType = bigShoe3PNG;


interface NavLink {
  href: string;
  label: string;
}

interface Shoe {
  thumbnail: ImageType;
  bigShoe: ImageType;
}

interface Statistic {
  value: string;
  label: string;
}

interface Product {
  imgURL: ImageType;
  name: string;
  price: string;
}

interface Service {
  imgURL: ImageType;
  label: string;
  subtext: string;
}

interface Review {
  imgURL: ImageType;
  customerName: string;
  rating: number;
  feedback: string;
}

interface FooterLink {
  title: string;
  links: FooterLinkItem[];
}

interface FooterLinkItem {
  name: string;
  link: string;
}

interface SocialMedia {
  src: ImageType;
  alt: string;
}

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes: Shoe[] = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics: Statistic[] = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products: Product[] = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services: Service[] = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const reviews: Review[] = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];

export const footerLinks: FooterLink[] = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia: SocialMedia[] = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];