export default function Header() {
  type Menu = {
    name: string;
  };

  const menus: Menu[] = [
    {
      name: "Dashboard",
    },
    {
      name: "Offres",
    },
    {
      name: "CVthèque",
    },
    {
      name: "Statistiques",
    },
  ];

  return (
    <header className="bg-[#00AEC8]">
      <div className="py-2 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <h1 className="text-black text-2xl font-semibold ">Logo</h1>
          <div className="relative hidden sm:block">
            <input
              className="h-10 w-full bg-[#46C4D7] rounded border-none text-white ps-4 text-sm shadow-sm sm:w-96"
              id="search"
              placeholder="Rechercher.."
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              {menus.map((menu, index) => (
                <p key={index} className="p-2.5 text-white">
                  {menu.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
