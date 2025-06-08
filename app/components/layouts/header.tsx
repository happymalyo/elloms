import { Button } from "~/components/ui/Button"
import { MdHistory } from "react-icons/md";

export const Header = () => {
    return (
        <header className="mb-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl">E</span>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                        Elloms
                    </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <Button className="bg-white text-black hover:bg-primary-300">
                        <MdHistory className="h-5 w-5" />
                        <span>History</span>
                    </Button>
                    <Button className="bg-primary-500 text-white hover:bg-primary-600">
                        <span className="material-symbols-outlined text-lg">add</span>
                        <span>New Campaign</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}