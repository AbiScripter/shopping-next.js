import ProductGallery from "../components/productsGallery";
import TabsSection from "../components/tabsSection";
import ProductDetails from "../components/productDetails";
import RelatedProducts from "../components/Sections/relatedProducts";
import RecentViewedProducts from "../components/Sections/recentlyViewedSection";

export default function Product() {
  return (
    <div className="xs:w-11/12 3xl:w-8/12  mx-auto">
      <div className="grid grid-cols-12 gap-8 text-custom-text py-14">
        {/* Product Gallery */}
        <div className="xs:col-span-12 md:col-span-6 xl:col-span-8">
          <ProductGallery />
        </div>

        {/* Product details */}
        <ProductDetails />
      </div>

      <div className="py-6">
        <TabsSection />
      </div>
      <div className="py-6">
        <RelatedProducts />
      </div>
      <div className="py-6">
        <RecentViewedProducts />
      </div>
    </div>
  );
}
