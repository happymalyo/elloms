import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { PublishOption } from "../PublishOption/PublishOption";
import { FcAddImage } from "react-icons/fc";
import { ImImage } from "react-icons/im";

export const GeneratedImage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <ImImage className="h-5 w-5 text-purple-700" />
        <span>Suggested Images</span>
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="relative group cursor-pointer"
          onClick={(e) =>
            (e.target as HTMLElement)
              .closest(".relative")
              ?.classList.toggle("ring-4", true)
          }
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
            alt="AI Technology"
            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl">
              <PlusCircleIcon className="text-white h-10 w-10s" />
            </span>
          </div>
        </div>

        <div
          className="relative group cursor-pointer"
          onClick={(e) =>
            (e.target as HTMLElement)
              .closest(".relative")
              ?.classList.toggle("ring-4", true)
          }
        >
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
            alt="Business Team"
            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl">
              <PlusCircleIcon className="text-white h-10 w-10s" />
            </span>
          </div>
        </div>

        <div
          className="relative group cursor-pointer"
          onClick={(e) =>
            (e.target as HTMLElement)
              .closest(".relative")
              ?.classList.toggle("ring-4", true)
          }
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
            alt="Data Analytics"
            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl">
              <PlusCircleIcon className="text-white h-10 w-10s" />
            </span>
          </div>
        </div>

        <div
          className="relative group cursor-pointer"
          onClick={(e) =>
            (e.target as HTMLElement)
              .closest(".relative")
              ?.classList.toggle("ring-4", true)
          }
        >
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=300&h=200&fit=crop"
            alt="Innovation"
            className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
            <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl">
              <PlusCircleIcon className="text-white h-10 w-10s" />
            </span>
          </div>
        </div>
      </div>

      <button className="w-full mt-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-300 hover:text-primary-500 transition-all duration-200 flex items-center justify-center space-x-2">
        <FcAddImage className="h-5 w-5" />
        <span>Upload Custom Image</span>
      </button>
    </div>
  );
};
