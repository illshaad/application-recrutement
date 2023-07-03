import { CandidateType, Email } from "../types";

export const getCandidates = async (): Promise<CandidateType[]> => {
  const response = await fetch("http://localhost:3000/candidates");
  const data = await response.json();
  return data;
};

export const sendEmail = async (email: Email) => {
  const response = await fetch("http://localhost:3000/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();

  return data;
};
