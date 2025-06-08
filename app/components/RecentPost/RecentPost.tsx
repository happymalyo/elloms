import { MdFavoriteBorder } from "react-icons/md";
import { BsChatLeft } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

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
                        <FaLinkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-3">AI in Healthcare - Posted 2 days ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                        <MdFavoriteBorder className="h-4 w-4 text-red-500" />
                            <span>247</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BsChatLeft className="h-4 w-4 text-blue-500" />
                            <span>32</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CiShare2 className="h-4 w-4 text-green-500" />
                            <span>18</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-purple-700">Facebook Post</span>
                        <FaFacebook className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Remote Work Tips - Posted 3 days ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <MdFavoriteBorder className="h-4 w-4 text-red-500" />
                            <span>189</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BsChatLeft className="h-4 w-4 text-blue-500" />
                            <span>25</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CiShare2 className="h-4 w-4 text-green-500" />
                            <span>12</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-700">LinkedIn Article</span>
                        <FaLinkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Future of Marketing - Posted 1 week ago</p>
                    <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                            <MdFavoriteBorder className="h-4 w-4 text-red-500" />
                            <span>356</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <BsChatLeft className="h-4 w-4 text-blue-500" />
                            <span>47</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <CiShare2 className="h-4 w-4 text-green-500" />
                            <span>29</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}