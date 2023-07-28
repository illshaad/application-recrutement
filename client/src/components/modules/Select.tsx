export default function Select({ candidates, setCandidates }) {
  const sortCandidatesByName = (asc: boolean) => {
    const sortedCandidates = [...candidates].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setCandidates(sortedCandidates);
  };

  const sortCandidatesByRating = (asc: boolean) => {
    const candidatesCopy = [...candidates];
    candidatesCopy.sort((a, b) =>
      asc ? a.rating - b.rating : b.rating - a.rating
    );
    setCandidates(candidatesCopy);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "NE") sortCandidatesByName(true);
    if (value === "DE") sortCandidatesByRating(true);
    if (value === "AS") sortCandidatesByRating(false);
  };

  return (
    <select
      className=" rounded bg-[#f0f4f9] px-1  font-semibold text-sm"
      onChange={(e) => handleFilterChange(e)}
    >
      <option value="">Filter par</option>
      <option value="NE">Name</option>
      <option value="AS">Note +</option>
      <option value="DE">Note -</option>
    </select>
  );
}
