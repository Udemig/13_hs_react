const DashboardLayout = ({ children, notifications, revenue, users }) => {
  return (
    <div className="text-xl">
      <h1>Dashboard Layout</h1>

      <div className="my-10">
        {children}

        <div className="flex mt-10">
          {notifications}
          {revenue}
        </div>
        {users}
      </div>
    </div>
  );
};

export default DashboardLayout;
