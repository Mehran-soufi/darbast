import Search from "@/components/search/Search";
import hero from "../assets/home/hero.jpeg";
import Slider from "@/components/slider/Slider";
import Property from "@/components/property/Property";

interface Accommodation {
  id: string;
  title: string;
  rating: number;
  price: number;
  discount: number;
  city_id: number;
  main_image_url: string;
  category: string;
  additional_images: string[];
}

async function getAccommodations(): Promise<Accommodation[]> {
  const res = await fetch("http://localhost:3001/accommodations", {
    cache: "no-store",
  });
  
  if (!res.ok) {
    console.error("Failed to fetch accommodations");
    return [];
  }

  const data = await res.json();
  console.log("Fetched accommodations data:", data);
  return data;
}

export default async function Home() {
  const accommodations = await getAccommodations();
  console.log("Accommodations in Home component:", accommodations);

  return (
    <div>
      <div className="w-full h-[80vh] relative hero">
        <img src={hero.src} alt="hero" className="w-full h-full object-cover" />
        <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center">
          <Search />
        </div>
      </div>
      <Property/>
      <Slider data={accommodations} />
    </div>
  );
}
