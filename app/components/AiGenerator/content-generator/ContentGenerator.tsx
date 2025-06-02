export const ContentGenerator = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2">
            <span className="material-symbols-outlined text-primary-500">edit_note</span>
            <span>Content Generator</span>
        </h2>

        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-2">Topic or Description</label>
                <textarea
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    rows={3}
                    placeholder="Describe what you want to create content about..."
                    defaultValue="Latest trends in AI technology and its impact on business automation"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Platform</label>
                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200">
                        <option>LinkedIn</option>
                        <option>Facebook</option>
                        <option>Twitter</option>
                        <option>Instagram</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Tone</label>
                    <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200">
                        <option>Professional</option>
                        <option>Casual</option>
                        <option>Inspiring</option>
                        <option>Informative</option>
                    </select>
                </div>
            </div>

            <button className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white py-3 rounded-lg hover:from-primary-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform duration-200">
                    auto_awesome
                </span>
                <span>Generate Content</span>
            </button>
        </div>
    </div>
    )
}