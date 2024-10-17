import Hero from "./components/hero";
import heroOneImg from "@/app/assets/hero-1.jpg";
import heroTwoImg from "@/app/assets/hero-2.webp";
import dressImg from "@/app/assets/dress-1.webp";
import DressCard from "./components/dressCard";

export default function Home() {
  return (
    <div className="lg:w-8/12 xl:w-7/12  mx-auto h-screen">
      <Hero
        imgsrc={heroOneImg}
        heading="cosmopolis"
        text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
        contentPosition="left"
      />
      <div className="border border-black">
        <p>New Arrivals</p>

        <div className="flex flex-wrap xs:gap-2 sm:gap-4 md:gap-8 lg:gap-8 justify-center border border-purple-600">
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
          <DressCard
            imgsrc={dressImg}
            title="burberry"
            description="(Product 17) Sample - Clothing And Accessory Boutiques For Sale"
            price="418.99"
          />
        </div>
      </div>

      <Hero
        imgsrc={heroTwoImg}
        heading="metropólis"
        text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
        contentPosition="right"
      />
    </div>
  );
}
