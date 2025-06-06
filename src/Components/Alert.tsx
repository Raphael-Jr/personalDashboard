import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissable">
        {children}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
          data-bs-dismiss="alert"
        ></button>
      </div>
    </>
  );
};

export default Alert;
