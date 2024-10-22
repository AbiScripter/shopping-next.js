"use client";
import { useState } from "react";
import MobileTabSection from "./tabMobileSection";

export const tabs = [
  "Description",
  "Additional Information",
  "Shipping & Return",
  "Custom Tab",
];

const TabOne = () => {
  return (
    <div className="p-6">
      <p className="mb-4  ">
        Nam tempus turpis at metus scelerisque placerat nulla deumantos
        sollicitud felis. Pellentesque diam dolor, elementum etos lobortis des
        mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
        commodo pharetras loremos. Donec pretium egestas sapien et mollis.
      </p>

      <h2 className="text-xl font-semibold mb-3">Sample Unordered List</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Commodus in tempor ullamcorper miaculis.</li>
        <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
        <li>Divamus sit amet purus justo.</li>
        <li>Proin molestie egestas orci ac suscipit risus posuere loremous.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">Sample Ordered List</h2>
      <ol className="list-decimal list-inside">
        <li>Commodus in tempor ullamcorper miaculis.</li>
        <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
        <li>Divamus sit amet purus justo.</li>
        <li>Proin molestie egestas orci ac suscipit risus posuere loremous.</li>
      </ol>
    </div>
  );
};

const TabTwo = () => {
  return (
    <div className="p-6">
      <p className="mb-4 ">
        Nam tempus turpis at metus scelerisque placerat nulla deumantos
        sollicitud felis. Pellentesque diam dolor, elementum etos lobortis des
        mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
        commodo pharetras loremos. Donec pretium egestas sapien et mollis.
        Pellentesque diam dolor cosmopolis etos lobortis.
      </p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
        <dt className="font-semibold">Comodous:</dt>
        <dd>Commodus in tempor ullamcorper miaculis.</dd>

        <dt className="font-semibold">Mattis laoreet:</dt>
        <dd>Pellentesque vitae neque mollis urna mattis laoreet.</dd>

        <dt className="font-semibold">Divamus de ametos:</dt>
        <dd>Divamus sit amet purus justo.</dd>

        <dt className="font-semibold">Molestie:</dt>
        <dd>Proin molestie egestas orci ac suscipit risus posuere loremous.</dd>
      </dl>
    </div>
  );
};

const TabThree = () => {
  return (
    <div className="p-6">
      {/* Returns Policy Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Returns Policy</h2>
        <p className="mb-4 ">
          You may return most new, unopened items within 30 days of delivery for
          a full refund. We’ll also pay the return shipping costs if the return
          is a result of our error (you received an incorrect or defective item,
          etc.).
        </p>
        <p className="mb-4">
          You should expect to receive your refund within four weeks of giving
          your package to the return shipper; however, in many cases, you will
          receive a refund more quickly. This time period includes the transit
          time for us to receive your return from the shipper (5 to 10 business
          days), the time it takes us to process your return once we receive it
          (3 to 5 business days), and the time it takes your bank to process our
          refund request (5 to 10 business days).
        </p>
        <p className="mb-4">
          If you need to return an item, simply log in to your account, view the
          order using the “Complete Orders” link under the My Account menu, and
          click the Return Item(s) button. We’ll notify you via e-mail of your
          refund once we’ve received and processed the returned item.
        </p>
      </section>

      {/* Shipping Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Shipping</h2>
        <p className="mb-4">
          We can ship to virtually any address in the world. Note that there are
          restrictions on some products, and some products cannot be shipped to
          international destinations.
        </p>
        <p className="mb-4">
          When you place an order, we will estimate shipping and delivery dates
          for you based on the availability of your items and the shipping
          options you choose. Depending on the shipping provider you choose,
          shipping date estimates may appear on the shipping quotes page.
        </p>
        <p className="mb-4">
          Please also note that the shipping rates for many items we sell are
          weight-based. The weight of any such item can be found on its detail
          page. To reflect the policies of the shipping companies we use, all
          weights will be rounded up to the next full pound.
        </p>
      </section>
    </div>
  );
};

const TabFour = () => {
  const data = [
    {
      title: "Drostique",
      description:
        "Nam tempus turpis at metus scelerisque placerat nulla deumantos",
    },
    {
      title: "Pharetro Lorem",
      description: "Pellentesque diam dolor elementum etos lobortis des mollis",
    },
    {
      title: "Milancelos",
      description: "Donec pretium egestas sapien et mollis",
    },
    {
      title: "Pellentesque",
      description:
        "Sedcus faucibus an sullam corper mattis drostique des commode pharetras",
    },
    {
      title: "Proin Molestie",
      description: "Pellentesque diam dolor elementum etos lobortis des mollis",
    },
    {
      title: "Cosmopolis",
      description: "Donec pretium egestas sapien et mollis",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <TabFourCard
          key={index}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  );
};

export const tabComponents = [TabOne, TabTwo, TabThree, TabFour];

type CardProps = {
  title: string;
  index: number;
  description: string;
};

const TabFourCard = ({ title, description, index }: CardProps) => {
  return (
    <div
      className={`${
        index % 2 == 0 ? "dark:text-custom-black bg-gray-200" : ""
      } p-4 grid grid-cols-6`}
    >
      <h3 className="col-span-1">{title}</h3>
      <p className="col-span-5">{description}</p>
    </div>
  );
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  function handleClick(t: number) {
    setActiveTab(t);
  }

  const ActiveTabComponent = tabComponents[activeTab]; // Get the active component

  return (
    <div>
      {/* tabs for desktop */}
      <div className="border-b-2 xs:hidden md:block">
        <div className="flex gap-8 py-2 justify-center border-b-2 pb-0">
          {tabs.map((tab, index) => (
            <p
              className={`font-semibold cursor-pointer text-xl ${
                activeTab === index ? "border-b-4 pb-2 border-black" : ""
              }`}
              onClick={() => handleClick(index)}
              key={index}
            >
              {tab}
            </p>
          ))}
        </div>

        <div className="py-4">
          {/* Use JSX to render the active tab component */}
          <ActiveTabComponent />
        </div>
      </div>

      {/* Tabs for mobile  */}
      <div className="xs:block md:hidden">
        <MobileTabSection />
      </div>
    </div>
  );
};

export default TabsSection;
