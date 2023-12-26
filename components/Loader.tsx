import Image from "next/image";
const Loader = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <div className="h-10 w-10 relative animate-spin">
        <Image alt="logo" src="/logo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground"> Forging your answers...</p>
    </div>
  );
};

export default Loader;
