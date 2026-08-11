import { House, File, MonitorCog } from "lucide-react";
import type { ElementType } from "react";

interface hederitens {
  id: string;
  title: string;
  icons: ElementType;
}
interface NavProps {
  OnChangeScreen: (id: string) => void;
}
const herder: hederitens[] = [
  {
    id: "Home",
    title: "Home",
    icons: House,
  },
  {
    id: "Sobre",
    title: "Sobre",
    icons: File,
  },
  {
    id: "Funcionalidades",
    title: "Funcionalidades",
    icons: MonitorCog,
  },
];

export function Nav({ OnChangeScreen }: NavProps) {
  return (
    <div className=" motion-preset-slide-up-lg motion-duration-1500 flex justify-center items-center gap-5 mt-6 ">
      <div className="flex justify-center items-center gap-5">
        <div className="flex backdrop:blur-2xl items-center justify-center py-2 px-10 gap-8 bg-white/0 rounded-full shadow-black/65 shadow-lg">
          {herder.map((item) => {
            const Icon = item.icons;

            return (
              <button
                key={item.id}
                onClick={() => OnChangeScreen(item.id)}
                className="text-black/80 flex p-3 items-center font-bold cursor-pointer hover:bg-blue-600/75 rounded-full duration-500 gap-2 hover:text-white/70"
              >
                <Icon className="w-7 h-7" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
