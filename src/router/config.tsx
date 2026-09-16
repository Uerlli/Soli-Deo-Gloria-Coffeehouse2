import type { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import OoLugarPage from "@/pages/o-lugar/page";
import OoCafePage from "@/pages/o-cafe/page";
import CardapioPage from "@/pages/cardapio/page";
import ExperienciaPage from "@/pages/experiencia/page";
import SobrePage from "@/pages/sobre/page";
import VisitaPage from "@/pages/visita/page";
import FaqPage from "@/pages/faq/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/o-lugar",
    element: <OoLugarPage />,
  },
  {
    path: "/o-cafe",
    element: <OoCafePage />,
  },
  {
    path: "/cardapio",
    element: <CardapioPage />,
  },
  {
    path: "/experiencia",
    element: <ExperienciaPage />,
  },
  {
    path: "/sobre",
    element: <SobrePage />,
  },
  {
    path: "/visita",
    element: <VisitaPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;