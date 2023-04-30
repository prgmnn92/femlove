import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

import Button from "./Button";
import Input from "./Input";

export default function Modal({ isOpen, closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successVisible, setSuccessVisible] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { name: "Zyklusgerechter Lebensstil", checked: false },
    { name: "PMS loswerden", checked: false },
    { name: "Periodenschmerzen loswerden", checked: false },
    { name: "Pille absetzen", checked: false },
    { name: "Sonstiges", checked: false },
  ]);

  const handleCheckedState = (e, idx) => {
    let newCheckboxes = [...checkboxes];
    newCheckboxes[idx].checked = !checkboxes[idx].checked;

    setCheckboxes(newCheckboxes);
  };

  const handleCreateAppointment = async (email, name, message, checkboxes) => {
    try {
      const response = await fetch("/api/createAppointmentEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          message,
          checkboxes,
        }),
      });

      const appointmentEntry = await response.json();
      console.log(appointmentEntry);
    } catch (error) {
      console.log("Error creating appointment", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleCreateAppointment(email, name, message, checkboxes);

    setName("");
    setEmail("");
    setMessage("");
    showSuccessMessage();
    setTimeout(() => {
      closeModal();
    }, 4000);
  };

  const showSuccessMessage = () => {
    setSuccessVisible(true);
  };

  const successMessage = (
    <div className="py-4">
      Danke für deine Anfrage. Ich werde mich in den nächsten Tagen mit dir in
      Verbindung setzen. 😊
    </div>
  );
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Anfrage für ein kostenloses Erstgespräch (online)
                  </Dialog.Title>
                  {successVisible ? (
                    successMessage
                  ) : (
                    <>
                      <p className="pt-2 pb-4 text-sm opacity-75">
                        Lass uns in dem kostenlosen Erstgespräch ganz
                        unverbindlich kennenlernen und gemeinsam herausfinden,
                        wie ich dir auf dem Weg zu einem gesünderen,
                        glücklicheren und erfüllteren Leben helfen kann. 🌸
                      </p>
                      <form
                        netlify="true"
                        method="POST"
                        name="kennelerngespraech"
                      >
                        <div className="relative flex-grow w-full pb-2">
                          <label
                            htmlFor="vorname"
                            className="text-sm font-medium leading-7 text-gray-600"
                          >
                            Vorname
                          </label>
                          <Input
                            type="vorname"
                            id="vorname"
                            name="vorname"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="relative flex-grow w-full pb-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium leading-7 text-gray-600"
                          >
                            Email
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="relative flex-grow w-full pb-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium leading-7 text-gray-600"
                          >
                            Nachricht
                          </label>
                          <textarea
                            className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-f-green focus:bg-transparent focus:ring-2 focus:ring-indigo-200 placeholder:text-black/25"
                            type="text"
                            id="message"
                            name="message"
                            value={message}
                            placeholder="Lass mich gerne schon wissen, was aktuell deine größte Herausforderung ist."
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                        <div className="mt-4">
                          <Button onClick={handleSubmit} type="submit">
                            Abschicken
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
