// import Image from "next/image";
// import prductImg from "@/app/assets/product-image.webp";
import Image from "next/image";
// import Button from "../components/button";
import ProductGallery from "../components/productsGallery";
import fireIcon from "@/app/assets/icons/fire.svg";
import sizeIcon from "@/app/assets/icons/size.svg";
import colors from "@/app/assets/icons/colors.svg";
import heart from "@/app/assets/icons/heartRounded.svg";
import share from "@/app/assets/icons/share.svg";
import shopPay from "@/app/assets/icons/shoppay.svg";
import eye from "@/app/assets/icons/eye.svg";
import securityImg from "@/app/assets/brands/security-brands.webp";
import { galleryImageThumbs, newArrivalsImages } from "../lib/images";
import caution from "@/app/assets/icons/caution.svg";
import truck from "@/app/assets/icons/truck.svg";
import security from "@/app/assets/icons/security.svg";
import TabsSection from "../components/tabsSection";
import TrendingSection from "../components/Sections/trendingSection";
import DressCard from "../components/Cards/dressCard";

export default function Product() {
  return (
    <div className="xs:w-11/12 lg:w-7/12 mx-auto">
      <div className="grid grid-cols-12 gap-8 text-custom-text">
        {/* Product Gallery */}
        <div className="col-span-8">
          <ProductGallery />
        </div>

        {/* Product details */}
        <div className="flex flex-col gap-8 col-span-4">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold">
              (Product 26) Sample - Clothing And Accessory Boutiques For Sale
            </div>
            <div className="text-red-600 flex items-center">
              <Image src={fireIcon} alt="fire" />
              <div className="font-semibold">7 sold in last 18 hours</div>
            </div>
            <div>
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos
              lobortis...
            </div>
            <div>
              <p>Vendor: Tomorrow</p>
              <p>SKU: W0690049</p>
              <p>Availability: Out Of Stock</p>
              <p>Product type: Cosmopolis</p>
            </div>
            <div className="text-xl font-semibold">$36.99</div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <p>Color: White</p>
              <div className="flex gap-2">
                {Array(3)
                  .fill(0)
                  .map((u, i) => (
                    <div
                      className="w-8 h-8  border rounded-full flex justify-center items-center color-selector"
                      key={i}
                      style={{
                        backgroundImage: `url(${galleryImageThumbs[0].src})`,
                      }}
                    ></div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div>Size: L</div>
              <div className="flex gap-2">
                {["S", "M", "L"].map((u, i) => (
                  <div
                    className="w-8 h-8  border flex justify-center items-center"
                    key={i}
                  >
                    <span>{u}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>Quantity: </p>
              <p>Subtotal: </p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                <Image src={sizeIcon} alt="size" /> Size guide
              </div>
              <div className="flex gap-2 items-center">
                <Image src={colors} alt="colors" /> Compare color
              </div>
            </div>
          </div>

          <div className="border border-red-700 flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <button className="w-10/12 py-3 px-5  button bg-custom-black text-white font-semibold hover:bg-white hover:text-custom-black transition-all duration-500 border border-custom-black">
                ADD TO CART
              </button>
              <Image src={heart} alt="heart" />
              <Image src={share} alt="share" />
            </div>
            <p className="flex gap-2 items-center">
              <input type="checkbox" />
              <span>
                I agree <span className="underline">terms and conditions</span>
              </span>
            </p>
            <div>
              <p
                className="text-white flex gap-2 items-center justify-center py-3"
                style={{ backgroundColor: "#5433EB" }}
              >
                Buy with <Image src={shopPay} alt="shoppay" />
              </p>
            </div>
            <div className="text-center underline">More payment options</div>
            <div className="flex gap-3">
              <Image src={eye} alt="eye" />
              <p>46 Customer viewing this product</p>
            </div>
          </div>

          <div>
            <div>
              <Image src={securityImg} alt="securityimg" />
            </div>

            <div className="flex flex-col gap-4 py-4">
              <div className="flex gap-2 items-start">
                <Image src={truck} alt="truck" />
                <div>
                  <p>Free Shipping</p>
                  <p>Free standard shipping on orders over $99</p>
                  <p>Estimated to be delivered on 12/01/2024 - 15/10/2024.</p>
                </div>
              </div>

              <div className="flex gap-2 items-start">
                <Image src={security} alt="security" />
                <div>
                  <p>Free Returns</p>
                  <p>Learn More</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Image src={caution} alt="caution" />
                <p>Covid-19 Shipping Delay Notice</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <TabsSection />
      </div>
      <div>
        <TrendingSection />
      </div>
      <div>
        <p className="font-semibold py-6 text-center">
          RECENTLY VIEWED PRODUCTS
        </p>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mx-auto">
          {newArrivalsImages.slice(0, 3).map((img, index) => (
            <DressCard key={index} {...img} />
          ))}
        </div>
      </div>
    </div>
  );
}
