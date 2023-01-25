export default function Badges() {
  return (
    <div className="p-5 flex flex-col space-y-4">
    <div className="flex flex-col space-y-2">
        <div>Basic badges</div>
        <div className="flex space-x-2">
            <div className="text-xs px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
            <div className="text-xs px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
        </div>
    </div>

    <div className="flex flex-col space-y-2">
        <div>Large badges</div>
        <div className="flex space-x-2">
            <div className="text-sm px-3 bg-gray-200 text-gray-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-red-200 text-red-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-orange-200 text-orange-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-yellow-200 text-yellow-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-green-200 text-green-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-teal-200 text-teal-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-blue-200 text-blue-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-purple-200 text-purple-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-indigo-200 text-indigo-800 rounded-full">Badge</div>
            <div className="text-sm px-3 bg-pink-200 text-pink-800 rounded-full">Badge</div>
        </div>
    </div>

    <div className="flex flex-col space-y-2">
        <div>Badge with dot</div>
        <div className="flex space-x-2">
            <div className="flex items-center space-x-1 text-xs px-2 bg-gray-200 text-gray-800 rounded-full">
                <div className="bg-gray-500 rounded-full"></div>
                <div>Badge</div>
            </div>
            <div className="flex items-center space-x-1 text-sm px-2 bg-gray-200 text-gray-800 rounded-full">
                <div className="bg-gray-500 rounded-full"></div>
                <div>Badge</div>
            </div>
        </div>
    </div>
</div> 
  )
}