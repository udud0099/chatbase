import { Button } from "@/components/ui/button";
import PopularIntegrations from "./components/PopularIntegrations";
import ConnectedPlatforms from "./components/ConnectedPlatforms";

export default function page() {
  return (
    <>
      <div>
        <div className="flex justify-between gap-2 items-center mb-2">
          <h1 className="mainH1">Platforms</h1>
          <Button variant="navButton">Explore Integrations</Button>
        </div>
        <PopularIntegrations />
        <ConnectedPlatforms />
      </div>
    </>
  );
}
