interface hederitens {
  id: string;
  title: string;
}
interface NavProps {
  OnChangeScreen: (id: string) => void;
}

const herder: hederitens[] = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "Sobre",
    title: "Sobre",
  },
  {
    id: "Funcionalidades",
    title: "Funcionalidades",
  },
  {
    id: "Download",
    title: "Download",
  },
];

export function Nav({ OnChangeScreen }: NavProps) {
  return (
    <div className=" flex justify-center items-center gap-5 mt-6">
      <div className="flex items-center justify-center py-2 px-6 bg-gray-500 rounded-full shadow-black/50 shadow-md">
        {herder.map((item) => (
          <button
            key={item.id}
            onClick={() => OnChangeScreen(item.id)}
            className="text-black/75 flex p-3 items-center font-bold"
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
