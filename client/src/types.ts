export type CandidateType = {
  id: number;
  name: string;
  age: number;
  skills: string[];
  profession: string;
  experience: number;
  email: string;
  rating: number;
  job: string;
  phone: number;
  picture: string;
};

export type Inputs = {
  messages: string;
};

export type ModalProps = {
  isOpen: boolean;
  setShowModal: (isOpen: boolean) => void;
  candidatesEmail: string;
};

export type Email = {
  messages: string;
  candidatesEmail: string;
};

export type HeaderProps = {
  candidates: CandidateType[];
  setCandidates: (candidates: CandidateType[]) => void;
  openModal: (isOpen: boolean) => void;
  candidatesEmail: string;
};
