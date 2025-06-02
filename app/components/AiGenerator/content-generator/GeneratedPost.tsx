export const GeneratedPost = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
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
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    <span>Generated 2 min ago</span>
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200">
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-200">
                        <span className="material-symbols-outlined">content_copy</span>
                    </button>
                </div>
            </div>
        </div>
    )
}