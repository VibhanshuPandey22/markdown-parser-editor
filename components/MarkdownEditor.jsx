import { markdownParser } from "@functions/markdown";
import { useRouter } from "next/navigation";

export const MarkdownEditor = ({ input, setInput }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-12 items-center w-full h-full relative min-h-screen">
      <div
        className={`tracking-wider font-light col-span-6 max-md:col-span-full flex items-center justify-center h-full max-md:h-[50vh] p-10 pt-12 w-full transition-all duration-500 bg-bgGray`}
      >
        <textarea
          placeholder="Enter input markdown string..."
          className={`h-full w-full rounded-md ring-0 outline-none resize-none p-5 transition-all duration-500 ease-in-out placeholder:max-md:text-sm max-md:text-sm bg-bgGray text-gray-50 placeholder:text-gray-400`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></textarea>
      </div>
      <div
        className={`h-full max-md:h-[50vh] overflow-x-auto col-span-6 max-md:col-span-full flex items-center justify-center p-10 pt-12 w-full transition-all duration-500 bg-bgLightGray`}
        id="output"
      >
        <div
          id="final-content"
          className={`tracking-wider font-light overflow-scroll overflow-x-auto h-full w-full p-5 transition-all max-md:text-sm duration-500 text-gray-50`}
        >
          {markdownParser(input) ? (
            markdownParser(input)
          ) : (
            <span className={`max-md:text-sm text-gray-400`}>
              Output HTML will be shown here...
            </span>
          )}
        </div>
      </div>
      <div className="absolute top-2 right-0 flex items-center justify-center px-6 gap-3">
        <button
          onClick={() => router.push("/help")}
          className=" tracking-wide text-xs py-2 text-blue-500 transition-all hover:text-blue-600"
        >
          Check Rules
        </button>
        <button
          onClick={() => router.push("/")}
          className=" tracking-wide text-xs py-2 text-red-500 transition-all hover:text-red-600"
        >
          Stop Editing
        </button>
      </div>
    </div>
  );
};
