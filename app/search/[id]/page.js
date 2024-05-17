import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import SearchOutput from "@/app/components/SearchOutput";

export default function Home({ params }) {
  let query = params.id;
  return (
    <div className="bg-[#0d0c0f]">
      <Navbar />
      <SearchOutput query={query} />
      <Footer />
    </div>
  );
}


