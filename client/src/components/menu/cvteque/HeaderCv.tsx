import { HeaderProps } from "../../../types";
import Select from "../../modules/Select";

export default function Header({
  candidates,
  setCandidates,
  candidatesEmail,
  openModal,
}: HeaderProps) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <h1 className="font-semibold text-slate-600">CVtèque</h1>
          <span className="text-[#00AEC8] font-semibold">
            {candidates.length} candidats
          </span>
        </div>

        <div className="flex items-center gap-2 rounded bg-[#f0f4f9] px-4 py-1 font-semibold ">
          <Select candidates={candidates} setCandidates={setCandidates} />
        </div>

        <button
          onClick={openModal}
          disabled={candidatesEmail.length < 1}
          className=" rounded bg-[#f0f4f9] px-4 py-1 font-semibold"
        >
          {candidatesEmail.length < 1
            ? "Au moins un candidat doit être sélectionné"
            : "Envoyer un email"}
        </button>
      </div>
    </div>
  );
}
