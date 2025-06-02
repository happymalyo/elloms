import { Button } from "../ui/Button"

export const PublishOption = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <span className="material-symbols-outlined text-orange-500">schedule_send</span>
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
                            <span className="material-symbols-outlined text-green-500">send</span>
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
                            <span className="material-symbols-outlined text-blue-500">schedule</span>
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
                            <i className="fa-brands fa-linkedin text-lg"></i>
                            <span>Post to LinkedIn</span>
                        </Button>
                        <Button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2">
                            <i className="fa-brands fa-facebook text-lg"></i>
                            <span>Post to Facebook</span>
                        </Button>
                    </div>
                </div>
            </div>
    )
}