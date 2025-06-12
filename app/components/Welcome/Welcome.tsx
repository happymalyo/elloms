import { AiGenerator } from "~/components/AiGenerator/AiGenerator";
import { PublishOption } from "~/components/PublishOption/PublishOption";
import { RecentPost } from "~/components/RecentPost/RecentPost";
import { GeneratedImage } from "~/components/SuggestedImage/GeneratedImage";

export function Welcome() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AiGenerator />
        <div className="space-y-6">
          <GeneratedImage />
          <PublishOption />
        </div>
      </div>
      <RecentPost />
    </>
  );
}
