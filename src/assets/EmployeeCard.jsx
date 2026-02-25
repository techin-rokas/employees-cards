function EmployeeCard({ employee }) {
  return (
    <div className="flex gap-6 items-center p-6 bg-white rounded-xl shadow">
      <div className="w-24">
        <img src={employee.logo} alt={employee.company} />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <span className="font-bold text-teal-600">{employee.company}</span>

          {employee.new && (
            <span className="bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
              NEW
            </span>
          )}

          {employee.featured && (
            <span className="bg-black text-white text-xs px-2 py-1 rounded-full">
              FEATURED
            </span>
          )}
        </div>

        <h2 className="font-bold text-lg">{employee.position}</h2>

        <div className="flex gap-4 text-gray-500 text-sm">
          <span>{employee.postedAt}</span>
          <span>•</span>
          <span>{employee.contract}</span>
          <span>•</span>
          <span>{employee.location}</span>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
