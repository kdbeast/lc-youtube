const ListItem = () => {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Dubbing",
    "Crikets",
    "Football",
    "Coding",
    "Telugu cinema",
    "Dramedy",
    "Live",
    "News",
    "Mixes",
    "1990s",
  ];

  return (
    <div className="flex overflow-x-scroll no-scrollbar px-3">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((item) => (
          <div className="flex-none bg-gray-300 hover:bg-gray-300 duration-300 rounded-xl py-2 px-4 font-medium text-gray-700 cursor-pointer">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
