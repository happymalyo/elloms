import { CheckCircleIcon, ClockIcon } from "@heroicons/react/16/solid";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { FaCopy, FaSave, FaTimes } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

interface GeneratedPostProps {
  generatedPost: string;
  relativeTime: string;
  isEditing: boolean;
  editedPost: string;
  setEditedPost: (post: string) => void;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
  handleEditPost: () => void;
  editError: string;
  isUpdating: boolean;
}

export const GeneratedPost = ({
  generatedPost,
  relativeTime,
  isEditing,
  editedPost,
  setEditedPost,
  handleSaveEdit,
  handleCancelEdit,
  handleEditPost,
  editError,
  isUpdating,
}: GeneratedPostProps) => {
  const [copyFeedback, setCopyFeedback] = useState<string>("");
  const handleCopyPost = () => {
    navigator.clipboard
      .writeText(editedPost)
      .then(() => {
        setCopyFeedback("Copied!");
        setTimeout(() => setCopyFeedback(""), 2000);
      })
      .catch(() => {
        setCopyFeedback("Failed to copy");
        setTimeout(() => setCopyFeedback(""), 2000);
      });
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <CheckCircleIcon className="h-5 w-5 text-green-500" />
        <span>Generated Post</span>
      </h3>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        {isEditing ? (
          <div className="space-y-2">
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
              rows={5}
              name="editedPost"
              value={editedPost}
              onChange={(e) => setEditedPost(e.target.value)}
            />
            <div className="flex space-x-2">
              <button
                className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 flex items-center space-x-1"
                onClick={handleSaveEdit}
                aria-label="Save edited post"
                disabled={isUpdating}
              >
                <FaSave className="h-4 w-4" />
                <span>Save</span>
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center space-x-1"
                onClick={handleCancelEdit}
                aria-label="Cancel editing post"
              >
                <FaTimes className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="prose max-w-none whitespace-pre-wrap">
            <ReactMarkdown>{generatedPost}</ReactMarkdown>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        {relativeTime && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <ClockIcon className="text-lg h-5 w-5" />
            <span>{relativeTime}</span>
          </div>
        )}

        <div className="flex space-x-2">
          <button
            onClick={handleEditPost}
            className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer"
          >
            <PencilIcon className="h-5 w-5 text-slate-500" />
          </button>
          <button
            onClick={handleCopyPost}
            className="flex items-center space-x-1 p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all duration-200 cursor-pointer"
          >
            <FaCopy className="h-5 w-5" />
            {copyFeedback && (
              <span className="text-xs text-gray-500">{copyFeedback}</span>
            )}
          </button>
        </div>
      </div>
      {editError && (
        <div className="text-red-600 bg-red-50 p-4 rounded-md">
          <p>{editError}</p>
        </div>
      )}
    </div>
  );
};
