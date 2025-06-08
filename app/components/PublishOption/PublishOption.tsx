import { Button } from "../ui/Button"
import { MdOutlineScheduleSend } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { ClockIcon } from "@heroicons/react/16/solid";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export const PublishOption = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <MdOutlineScheduleSend className="h-7 w-7 text-orange-500" />
                <span>Publishing Options</span>
            </h3>

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <input
                        type="radio"
                        id="now"
                        name="schedule"
                        className="text-primary-500"
                        defaultChecked
                    />
                    <label htmlFor="now" className="flex items-center space-x-2">
                        <IoMdSend className="h-5 w-5 text-green-500" />
                        <span>Publish Now</span>
                    </label>
                </div>

                <div className="flex items-center space-x-4">
                    <input
                        type="radio"
                        id="schedule"
                        name="schedule"
                        className="text-primary-500"
                    />
                    <label htmlFor="schedule" className="flex items-center space-x-2">
                        <ClockIcon className="h-5 w-5 text-blue-500" />
                        <span>Schedule for Later</span>
                    </label>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                    <input
                        type="date"
                        className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                    <input
                        type="time"
                        className="p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                <div className="flex space-x-3 pt-4">
                    <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2">
                        <FaLinkedin className="h-5 w-5" />
                        <span>Post to LinkedIn</span>
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                        <FaFacebook className="h-5 w-5" />
                        <span>Post to Facebook</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}