const valueItens = [
  { name: "salary", salary: 1700 },
  { name: "Expense", value: 200 },
];

export function Tester() {
  return (
    <div className="flex m-7 bg-gray-950 w-full h-150 rounded-2xl shadow-black/50 shadow-md motion-preset-slide-up-lg motion-duration-1500">
      <div className="flex">
        {valueItens.map((item) => {
          return (
            <div
              key={item.name}
              className="text-white border-2 border-gray-700/75 w-1/2 h-1/2 flex justify-center items-center text-2xl
              p-7 m-7
              "
            >
              {item.name}: {item.salary?.toFixed(2) || item.value?.toFixed(2)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
