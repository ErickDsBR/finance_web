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
];

export function Nav({ OnChangeScreen }: NavProps) {
  return (
    <div className="  motion-preset-slide-up-lg flex justify-center items-center gap-5 mt-6 ">
      <div className="flex justify-center items-center gap-5">
        <div className="flex backdrop:blur-2xl items-center justify-center py-2 px-6 bg-gray-900/30   rounded-full shadow-black/50 shadow-md">
          {herder.map((item) => (
            <button
              key={item.id}
              onClick={() => OnChangeScreen(item.id)}
              className="text-black/80 flex p-3 ite s-center font-bold"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
