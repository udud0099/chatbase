// import RetroAgentTabs from "./components/RetroAgentTabs";

import RetroAgentTabs from "./components/RetroAgentTabs";

export default function page() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 mt-8">
        <div className="flex gap-4  flex-col">
          <div className=" ">
            <h1 className="mainH1 ">Retro Agent</h1>
          </div>
          <div>
            <RetroAgentTabs />
          </div>
        </div>
      </div>
    </>
  );
}
