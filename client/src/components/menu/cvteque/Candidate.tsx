import Ratings from "../../modules/Ratings";
import { CandidateType } from "../../../types";

export default function Candidate({
  candidate,
  selectedesMultipCandidates,
  isSelected,
}: {
  candidate: CandidateType;
  selectedesMultipCandidates: (candidate: CandidateType) => void;
  isSelected: boolean;
}) {
  const { name, email, phone, job, experience, skills, rating, picture } =
    candidate;

  return (
    <div
      onClick={() => selectedesMultipCandidates(candidate)}
      className={` cursor-pointer relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 ${
        isSelected ? "shadow shadow-[#00AEC8]" : ""
      }`}
    >
      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{name}</h3>
          <p className="text-base font-semibold text-gray-900 sm:text-xl">
            {job}
          </p>
          <p className="mt-1 text-xs  font-bold text-gray-600"> {email}</p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt="Picture the candidate"
            src={picture}
            className="h-16 w-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>
      <Ratings rating={rating} />
      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{phone}</p>
      </div>
      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dd className="text-xs text-gray-500">
            {experience} {experience <= 1 ? "year" : "years"}
          </dd>
          <dt className="text-sm font-medium text-gray-600">Experiences</dt>
        </div>

        <div className="flex flex-col-reverse">
          <dd className="text-xs text-gray-500">{skills.join(" ")}</dd>
          <dt className="text-sm font-medium text-gray-600">Skills</dt>
        </div>
      </dl>
    </div>
  );
}
