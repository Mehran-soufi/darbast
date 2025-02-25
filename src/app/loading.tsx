import spinner from "@/assets/loading/loading-spiner.gif";

export default function Loding() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={spinner.src} alt="sloading" />
    </div>
  );
}
