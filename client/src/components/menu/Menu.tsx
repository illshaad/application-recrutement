export default function Menu() {
  return (
    <div className="h-screen border bg-white w-64">
      <div className="px-2 py-6">
        <span className="grid h-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>
        <ul className="space-y-2">
          <li>
            <button className="block rounded-lg mt-4 px-4 py-2 w-full font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Candidats
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
