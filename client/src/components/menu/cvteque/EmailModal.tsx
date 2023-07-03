import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from "../../../services/candidats";
import { Inputs, ModalProps } from "../../../types";

export default function EmailModal({
  isOpen,
  setShowModal,
  candidatesEmail,
}: ModalProps) {
  const closeModal = () => {
    setShowModal(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { messages } = data;
    const res = await sendEmail({ messages, candidatesEmail });
    if (res.message) {
      window.location.reload();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-black opacity-75"></div>
          </div>
          <div className="relative bg-white rounded-lg">
            <div className="mx-auto max-w-screen-xl py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg">
                <h1 className="text-2xl font-bold sm:text-3xl">Email</h1>

                <p className="mt-4 text-gray-500 ">
                  Ce ou ces candidats seront contactés par email pour poursuivre
                  <br />
                  le processus de sélection.
                </p>

                <div className="flex flex-wrap gap-2 item-center justify-center mt-4">
                  {candidatesEmail.map((email, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-purple-100 px-2.5  text-sm text-slate-600 font-semibold"
                    >
                      {email}
                    </span>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              >
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  {...register("messages", { required: true })}
                  placeholder="Message..."
                  rows={8}
                ></textarea>
                {errors.messages && (
                  <p className="text-red-700 font-semibold text-center">
                    Message requis
                  </p>
                )}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Envoyé
                  </button>
                </div>
              </form>
            </div>

            <button
              className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
              onClick={() => closeModal()}
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
