import Image from "next/image";
interface EmptyProps {
  label: string;
}
const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-16 flex flex-col items-center justify-center z-0">
      <div className="relative h-72 w-80">
        <Image src="/empty.png" fill alt="Empty" className="z-0" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};

export default Empty;
