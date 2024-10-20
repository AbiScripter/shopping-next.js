import close from "@/app/assets/icons/close.svg";
import Image from "next/image";

const sidebarItems = [
  "Home",
  "New",
  "Accessories",
  "Shop This Look",
  "Blog",
  "My Wish List",
  "My Account",
];

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar} // Closes sidebar when clicked outside
        ></div>
      )}
      {/* siebar */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-white text-black text-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="sidebar-header bg-black text-white flex justify-between items-center p-4">
          <div className="text-lg font-semibold">
            <p>Menu</p>
          </div>
          <p onClick={toggleSidebar} className="cursor-pointer">
            <Image src={close} alt="close" />
          </p>
        </div>

        <ul className="mt-5">
          {sidebarItems.map((item, index) => (
            <p key={index} className="py-4 px-4  border-b-2">
              {item}
            </p>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
