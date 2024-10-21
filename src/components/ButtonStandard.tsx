import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  type?: "primary" | "secondary";
};

export default function ButtonStandard({ onClick, children, type }: Props) {
  let color = "bg-[#06b6d4]";
  if (type === "primary") {
    color = "bg-[#06b6d4]";
  } else if (type === "secondary") {
    color = "bg-[#06aa00]"; //
  }
  return (
    <div
      className={clsx(
        "flex w-full h-full font-light text-base bg-[#06b6d4] text-white rounded-md)",
        color
      )}
      onClick={() => {
        onClick();
      }}
    >
      <div className="flex justify-center gap-2 p-2 w-full  rounded-md hover:bg-blue-400 hover:cursor-pointer">
        {children}
      </div>
    </div>
  );
}
