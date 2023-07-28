import { useState } from "react";

import { CandidateType } from "../../types";

import Candidate from "./cvteque/Candidate";
import HeaderCv from "./cvteque/HeaderCv";
import EmailModal from "./cvteque/EmailModal";

export default function CvTeque({
  candidates,
  setCandidates,
}: {
  candidates: CandidateType[];
  setCandidates: (candidates: CandidateType[]) => void;
}) {
  const [selectedCandidateId, setSelectedCandidateId] = useState<
    CandidateType["id"][]
  >([]);

  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleSelectedCandidate = (candidate: CandidateType) => {
    const isSelected = selectedCandidateId.includes(candidate.id);
    if (isSelected) {
      setSelectedCandidateId(
        selectedCandidateId.filter((id) => id !== candidate.id)
      );
    } else {
      setSelectedCandidateId([...selectedCandidateId, candidate.id]);
    }
  };

  const candidatesEmail = candidates
    .filter((candidate) => selectedCandidateId.includes(candidate.id))
    .map((candidate) => candidate.email);

  const openModal = () => setShowModal(true);

  return (
    <>
      <HeaderCv
        setCandidates={setCandidates}
        candidates={candidates}
        candidatesEmail={candidatesEmail}
        openModal={openModal}
      />
      <div className="flex flex-wrap gap-6 px-10">
        {candidates.map((candidate, index) => (
          <Candidate
            key={index}
            candidate={candidate}
            isSelected={selectedCandidateId.includes(candidate.id)}
            toggleSelectedCandidate={toggleSelectedCandidate}
          />
        ))}
      </div>
      <EmailModal
        isOpen={showModal}
        setShowModal={setShowModal}
        candidatesEmail={candidatesEmail}
      />
    </>
  );
}
