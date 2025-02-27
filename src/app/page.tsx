// pages/index.tsx
import Search from "@/components/search/Search";
import hero from "../assets/home/hero.jpeg";
import Slider from "@/components/slider/Slider";
import Property from "@/components/property/Property";
import ErrorPage from "./_error";
import Newsletter from "@/components/newsletter/Newsletter";

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
    throw new Error("Failed to fetch accommodations");
  }

  const data = await res.json();
  return data;
}

export default async function Home() {
  try {
    const accommodations = await getAccommodations();

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
        <Newsletter/>
      </div>
    );
  } catch (error) {
    return <ErrorPage />;
  }
}
