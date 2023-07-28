import { useEffect, useState } from "react";
import "./App.css";

import Menu from "./components/menu/Menu";
import CvTeque from "./components/menu/CvTeque";

import { getCandidates } from "./services/candidats";
import { CandidateType } from "./types";

function App() {
  const [candidates, setCandidates] = useState<CandidateType[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const res = await getCandidates();
      setCandidates(res);
    };

    fetchCandidates();
  }, []);

  return (
    <div className="flex">
      <Menu />
      <div className="w-full">
        <CvTeque candidates={candidates} setCandidates={setCandidates} />
      </div>
    </div>
  );
}

export default App;
