import { Tester } from "../../components/tester/tester.tsx";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-around m-7">
      <h1 className="flex items-center justify-center text-5xl text-blue-600/75 p-8 motion-preset-slide-up-lg motion-delay-300 font-bold underline decoration-black/75">
        Welcome to the Cash In
      </h1>
      <Tester />
    </div>
  );
}
