import { MdEvent } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import { GrCatalog } from "react-icons/gr";
import regulations from "./dummy.pdf";

export const Links = [
  {
    id: 0,
    title: "Wydarzenia",
    icon: <MdEvent />,
    description:
      "Najbliższe wydarzenia dla każdej grupy wiekowej w naszej bibliotece",
    bgColor: "#33cccc",
    url: "/aktualności",
  },
  {
    id: 1,
    type:"DOWLOAD",
    title: "Regulamin",
    icon: <RiNewspaperFill />,
    description:
      "Sprawdź regulamin korzystania z biblioteki.",
    bgColor: "#ed0773",
    url: `${regulations}`,
  },
  {
    id: 2,
    title: "katalog książek",
    icon: <GrCatalog />,
    description:
      "Katalog umożliwia wyszukiwanie książek z informacją o ich dostępności oraz ich rezerwowanie ",
    bgColor: "#85b82e",
    url: "/katalog",
  },
];
