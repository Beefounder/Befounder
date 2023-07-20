import { close } from "../../../assets/icons";

const ResetPassword = (modalOption: { open: any; onClose: any }) => {
  if (!modalOption.open) return null;

  return (
    <div
      onClick={modalOption.onClose}
      className="fixed left-0 top-0 bottom-0 z-10 bg-black bg-opacity-25 w-full flex justify-center items-center overflow-hidden"
    >
      <form
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="py-8 text-center bg-white w-11/12 md:w-5/12 overflow-hidden"
      >
        <div className="flex gap-12 md:gap-32 lg:gap-40 mb-4 pl-3 md:pl-24 lg:pl-32 pr-7">
          <h1 className="text-xl md:text-2xl text-[#090A2A] font-medium">
            Reset password{" "}
          </h1>
          <button className="cursor-pointer p-2">
            <img
              onClick={modalOption.onClose}
              src={close}
              alt="x close icon"
              className=" max-w-md"
            />
          </button>
        </div>
        <p className="text-[#494A50] text-base">
          Collaborate with top talents to bring your idea to life
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <input
            className="w-10/12 p-3 text-[#B3B3B3] border border-[#090A2A] rounded"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-10/12 p-3 bg-[#000211] text-[#fff] rounded"
            type="button"
            value="Reset password"
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
