import Search from "@/components/search/Search";
import hero from "../assets/home/hero.jpeg";
import Slider from "@/components/slider/Slider";
import Property from "@/components/property/Property";
import ErrorPage from "./error";
import Newsletter from "@/components/newsletter/Newsletter";
import HostBanner from "@/components/host-banner/HostBanner";
import Podcast from "@/components/podcast/Podcast";
import Announcement from "@/components/announcement/Announcement";

export interface Accommodation {
  id: string;
  title: string;
  rating: number;
  price: number;
  discount: number;
  city: string;
  province: string;
  main_image_url: string;
  category: string;
  additional_images: string[];
  facilities: string[];
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
          <img
            src={hero.src}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center">
            <Search />
          </div>
        </div>
        <Property />
        <Slider data={accommodations} />
        <HostBanner />
        <Podcast />
        <Announcement />
        <Newsletter />
      </div>
    );
  } catch (error) {
    return <ErrorPage />;
  }
}
