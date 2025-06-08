import { ContentGenerator } from "./content-generator/ContentGenerator"
import { GeneratedPost } from "./content-generator/GeneratedPost"

export const AiGenerator = () => {
    return (
        <div className="space-y-6">
            <ContentGenerator />
            <GeneratedPost />
        </div>
    )
}