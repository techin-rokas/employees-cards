import "./App.css";
import employees from "./data/employees.json";
import EmployeeCard from "./assets/EmployeeCard";

function App() {
  return (
    <>
      <header className="bg-teal-500 h-30 flex items-center justify-center rounded-t-xl">
        <input type="text" className="bg-white w-80 h-10 p-2 rounded-xl" />
      </header>
      <div className="min-h-screen bg-gray-100 p-6 rounded-b-xl ">
        <div className="flex flex-col gap-6">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
