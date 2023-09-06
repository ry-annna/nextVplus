import CustomNavbar from "@/components/customNavbar";
const AppShell = (props) => {
  const { children } = props;
  return (
    <div>
      <CustomNavbar />
      {children}
    </div>
  );
};

export default AppShell;
