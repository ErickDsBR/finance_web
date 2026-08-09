interface hederitens {
  id: string;
  title: string;
  link: string;
}

const herder: hederitens[] = [
  {
    id: "Sobre",
    title: "Sobre",
    link: "../../pages/sobre/sobre.tsx",
  },
  {
    id: "Funcionalidades",
    title: "Funcionalidades",
    link: "/funcionalidades",
  },
  {
    id: "Download",
    title: "Download",
    link: "/download",
  },
];

export function Nav() {
  return (
    <div className=" flex justify-center items-center gap-5 mt-6">
      <div
        className="
        flex items-center justify-center 
        py-2 px-6
        bg-gray-500 rounded-full shadow-black/50 shadow-md
        "
      >
        {herder.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-black/75 flex p-3 items-center font-bold"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
