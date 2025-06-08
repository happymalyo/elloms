import { CheckCircleIcon, ClipboardDocumentIcon, ClipboardIcon, ClockIcon, DocumentDuplicateIcon } from "@heroicons/react/16/solid"
import { ClipboardDocumentCheckIcon, PencilIcon } from "@heroicons/react/24/outline"
import { FaCopy } from "react-icons/fa";

export const GeneratedPost = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Generated Post</span>
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 leading-relaxed">
                    🚀 The future of business is here! AI technology is revolutionizing how we work,
                    automate processes, and drive innovation. From intelligent chatbots to
                    predictive analytics, companies are leveraging AI to:
                    <br />
                    <br />
                    ✅ Streamline operations
                    <br />
                    ✅ Enhance customer experience
                    <br />
                    ✅ Make data-driven decisions
                    <br />
                    ✅ Boost productivity by 40%
                    <br />
                    <br />
                    What AI tools are transforming your industry? Share your thoughts below! 💭
                    <br />
                    <br />
                    #AI #BusinessAutomation #TechTrends #Innovation #FutureOfWork
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ClockIcon className="text-lg h-5 w-5" />
                    <span>Generated 2 min ago</span>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <PencilIcon className="h-5 w-5 text-slate-500" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-200">
                        <FaCopy className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}