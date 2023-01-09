import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import "./ModalFrameContext.scss";

type ModalFrameContextValue = {
  modal: ReactNode | null;
  setModal: (modal: ReactNode) => void;
  closeModal: () => void;
};

const ModalFrameContext = createContext<ModalFrameContextValue>({
  modal: null,
  setModal(modal) {},
  closeModal() {},
});

export const ModalFrameProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode | null>(null);

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return (
    <ModalFrameContext.Provider value={{ modal, setModal, closeModal }}>
      {modal && <div className="modal_wrapper">{modal}</div>}
      {children}
    </ModalFrameContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalFrameContext);
};
