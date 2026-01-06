import COTK from "./COTK";
import EndOfAnEra from "./endofanera";
import InternalFaultLines from "./internalfaultlines";
import StackedDecks from "./stackeddecks";

export const BLOGS = [
  {
    id: "internalfaultlines",
    slug: "internalfaultlines",
    title: "Internal Faultlines",
    author: "Kannan Agrawal",
    category: "Editorial · India · Governance",
    // Background lives in /public/images/blogbgs
    coverImage: "/images/blogbgs/IFBackground.png",
    Component: InternalFaultLines,
  },
  {
    id: "stackeddecks",
    slug: "stackeddecks",
    title: "Stacked Decks and Shattered Chips",
    author: "Chaitanya Harikrishna",
    category: "Editorial · Geopolitics",
    // Using the EHS background until a dedicated stacked-decks background is provided
    coverImage: "/images/blogbgs/EHSbackground.png",
    Component: StackedDecks,
  },

];
