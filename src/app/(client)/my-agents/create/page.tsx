import CreateNewAgent from "./components/CreateNewAgent";
import KnowledgeBase from "./components/KnowledgeBase";

export default function page() {
  return (
    <>
      <div className="topRoundBorder ">
        <div className=" max-w-7xl mx-auto py-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 mt-8">
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-[.7]">
              <CreateNewAgent />
              <div>
                <h1 className="mainH2 my-4">Knowledge Base</h1>
                <KnowledgeBase />
              </div>
            </div>
            <div className="flex-[.3]">
              <div className="w-full bg-gray-300 rounded-xl p-4">
                <h3>overview</h3>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
