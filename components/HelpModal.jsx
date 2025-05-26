"use client";
import { mdSyntaxHelp } from "@constants/mdSyntaxHelp";
import { useRouter } from "next/navigation";
// import { ChangelogData } from "@constants/changeLog";

export const HelpModal = () => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-all duration-500 ease-in-out">
      <div
        className={`relative rounded-lg shadow-lg w-full h-full p-8 overflow-y-auto transition-all duration-500 ease-in-out bg-bgGray text-slate-200`}
      >
        <div className="flex justify-end">
          <button
            onClick={() => router.push("/")}
            className="text-xs text-red-500 hover:text-red-600 transition-all duration-500 top-4 right-4 absolute"
          >
            Close
          </button>
        </div>

        <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-semibold mb-8 max-md:mb-5 text-center tracking-wider pb-5 mt-5">
          <span className={`transition-all duration-500 text-blue-500`}>
            MARKDOWN
          </span>{" "}
          SYNTAX
        </h2>

        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {mdSyntaxHelp.map((listItem) => (
              <div
                key={listItem.id}
                className={`rounded-xl px-6 pt-4 pb-5 drop-shadow-sm border-none transition-all duration-500 overflow-auto bg-bgLighterGray`}
              >
                <h4
                  className={`font-semibold text-xl max-md:text-lg tracking-wide mb-2 text-right transition-all duration-500 text-slate-200`}
                >
                  {listItem.heading}
                </h4>
                <hr
                  className={`mb-4 w-full transition-all duration-500 opacity-10`}
                />

                <div className="flex flex-col gap-3 text-sm">
                  <p className="flex flex-col gap-2">
                    <span
                      className={`transition-all duration-500 text-blue-500 font-medium`}
                    >
                      Syntax :
                    </span>
                  </p>
                  <pre
                    className={`px-3 py-2 rounded-md w-fit transition-all duration-500 bg-bgGray text-slate-200`}
                  >
                    <code>{listItem.syntax}</code>
                  </pre>

                  <p className="flex flex-col gap-2">
                    <span
                      className={`transition-all duration-500 text-blue-500 font-medium`}
                    >
                      Output :
                    </span>
                  </p>
                  <div
                    className={`px-3 py-2 rounded-md w-fit transition-all duration-500 bg-bgGray text-slate-200`}
                  >
                    {listItem.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div>
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Changelog
          </h3>
          <ul className="list-disc pl-5 max-md:text-sm ">
            {ChangelogData.map((item) => (
              <li key={item.id}>
                v{item.version} - {item.text}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
