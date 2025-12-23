import React from "react";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center pt-16">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-8">Task Manager</h2>

      {/* Card */}
      <div className="bg-white border border-gray-300 rounded-lg p-6 w-full max-w-3xl">
        {/* Input Row */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Add task..."
            className="flex-1 border border-gray-300 rounded px-4 py-3"
          />
          <button className=" cursor-pointer px-6 py-3 bg-black text-white rounded">
            Add
          </button>
        </div>

        {/* Task List (UI only) */}
        <div className="space-y-3">
          <div className="flex justify-between items-center border p-3 rounded">
            <span>Learn React</span>
            <button className="text-red-500">Delete</button>
          </div>

          <div className="flex justify-between items-center border p-3 rounded">
            <span>Build Task App</span>
            <button className="text-red-500">Delete</button>
          </div>

          <div className="flex justify-between items-center border p-3 rounded">
            <span>Practice useEffect</span>
            <button className="text-red-500">Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
