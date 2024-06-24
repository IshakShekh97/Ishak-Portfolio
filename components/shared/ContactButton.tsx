import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

const ConatctButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="cursor-pointer max-w-44 w-full flex px-10 py-2 items-center gap-3 justify-center border rounded-lg bg-violet-600 text-black font-bold outline-none border-black group transition-all focus:scale-110 hover:scale-110 hover:bg-violet-900 hover:text-white-100 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <Send className="w-4" />
        </>
      )}
    </button>
  );
};

export default ConatctButton;
