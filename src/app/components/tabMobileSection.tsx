"use client";
import { useState } from "react";
import { tabComponents, tabs } from "./tabsSection";
import Image from "next/image";
import close from "@/app/assets/icons/closeBlack.svg";
import rightArrow from "@/app/assets/icons/right-arrow.svg";

const MobileTabSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  function handleClick(index: number) {
    handleModal(true);
    setActiveTab(index);
  }

  function handleModal(isOpen: boolean) {
    setIsModalOpen(isOpen);
  }

  return (
    <div>
      <div>
        {tabs.map((tabTitle, index) => (
          <div
            className={`font-semibold cursor-pointer text-xl py-3 border-b-2 flex justify-between items-center`}
            onClick={() => handleClick(index)}
            key={index}
          >
            <p>{tabTitle}</p>
            <p>
              <Image src={rightArrow} alt="right-arrow" />
            </p>
          </div>
        ))}
      </div>

      <div>
        <TabModal
          onModal={handleModal}
          activeTab={activeTab}
          isModalOpen={isModalOpen}
        />
      </div>
    </div>
  );
};

type TabModalProps = {
  onModal: (isOpen: boolean) => void;
  activeTab: number;
  isModalOpen: boolean;
};

const TabModal = ({ onModal, activeTab, isModalOpen }: TabModalProps) => {
  if (!isModalOpen) return null;

  const ActiveTabComponent = tabComponents[activeTab];

  function handleClose() {
    onModal(false);
  }

  return (
    <div
      className={`fixed inset-0 bg-custom-black bg-opacity-50 z-40 flex items-start justify-center`}
    >
      <div
        className={`relative bg-white dark:bg-custom-black w-full h-full p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out ${
          isModalOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center shadow-md text-lg font-semibold p-2">
          <p className="">{tabs[activeTab]}</p>
          <Image src={close} alt="close" onClick={handleClose} />
        </div>

        {/* Render the active tab component */}
        <div className="mt-4">
          <ActiveTabComponent />
        </div>
      </div>
    </div>
  );
};

export default MobileTabSection;
