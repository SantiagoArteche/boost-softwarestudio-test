import { Contact, Products, Welcome } from "./components/sections";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Welcome,
  },
  {
    id: "products",
    path: "/products",
    Element: Products,
  },
  {
    id: "contact",
    path: "/contact",
    Element: Contact,
  },
];
