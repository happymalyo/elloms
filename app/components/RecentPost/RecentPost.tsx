export const RecentPost = () => {
    return (
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <span className="material-symbols-outlined text-indigo-500">analytics</span>
                <span>Recent Posts Performance</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-700">LinkedIn Post</span>
                        <i className="fa-brands fa-linkedin text-blue-600"></i>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">AI in Healthcare - Posted 2 days ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-red-500 text-sm">favorite</span>
                            <span>247</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-blue-500 text-sm">
                                chat_bubble
                            </span>
                            <span>32</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-green-500 text-sm">share</span>
                            <span>18</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-purple-700">Facebook Post</span>
                        <i className="fa-brands fa-facebook text-blue-600"></i>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Remote Work Tips - Posted 3 days ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-red-500 text-sm">favorite</span>
                            <span>189</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-blue-500 text-sm">
                                chat_bubble
                            </span>
                            <span>25</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-green-500 text-sm">share</span>
                            <span>12</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700">LinkedIn Article</span>
                        <i className="fa-brands fa-linkedin text-blue-600"></i>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Future of Marketing - Posted 1 week ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-red-500 text-sm">favorite</span>
                            <span>356</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-blue-500 text-sm">
                                chat_bubble
                            </span>
                            <span>47</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="material-symbols-outlined text-green-500 text-sm">share</span>
                            <span>29</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}