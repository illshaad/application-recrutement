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
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="text-[#00AEC8] font-semibold">
            {candidates.length} candidats
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 rounded bg-[#f0f4f9] px-4 py-1 sm:mt-0 font-semibold">
          <Select candidates={candidates} setCandidates={setCandidates} />
        </div>

        <button
          onClick={openModal}
          disabled={candidatesEmail.length < 1}
          className={`rounded bg-[#f0f4f9] w-[350px] height-[40px] px-3 py-1 font-semibold text-sm sm:px-4 sm:py-1 ${
            candidatesEmail.length < 1 ? "mt-2 sm:mt-0" : "mt-4 sm:mt-0"
          }`}
        >
          {candidatesEmail.length < 1
            ? "Au moins un candidat doit être sélectionné"
            : "Envoyer un email"}
        </button>
      </div>
    </div>
  );
}
