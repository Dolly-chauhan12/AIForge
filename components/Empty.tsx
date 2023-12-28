import Image from "next/image";
interface EmptyProps {
  label: string;
}
const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full px-10 py-8 flex flex-col items-center justify-center z-0">
      <div className="relative h-80 w-80">
        <Image src="/empty.png" fill alt="Empty" className="z-0 " />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
