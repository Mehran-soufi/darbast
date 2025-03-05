import { Accommodation } from "@/app/page";
import Residence from "@/components/residence/Residence";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const id = params.id;
  const res = await fetch(`http://localhost:3001/accommodations/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Accommodation not found");
  }

  const residence: Accommodation = await res.json();

  return {
    title: `سایت دربست | ${residence.title}`,
  };
}

export default async function OneResidence({ params }: Props) {
  const { id } = params;

  const res = await fetch(`http://localhost:3001/accommodations/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch accommodations");
  }

  const residence: Accommodation = await res.json();

  return (
   <Residence residence={residence}/>
  );
}
