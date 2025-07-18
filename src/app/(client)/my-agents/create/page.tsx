import CreateNewAgent from "./components/CreateNewAgent";
import KnowledgeBase from "./components/KnowledgeBase";

export default function page() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 mt-8">
        <div className="flex gap-4 flex-col md:flex-row">
          <div className="flex-[.7]">
            <CreateNewAgent />
            <KnowledgeBase />
          </div>
          <div className="flex-[.3]">
            <div className="w-full bg-gray-300 rounded-xl p-4">
              <h3>overview</h3>
            <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
