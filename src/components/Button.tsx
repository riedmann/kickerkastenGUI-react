type Props = {
  children?: React.ReactNode;
  onClick: () => void;
};

export default function Button({ onClick, children }: Props) {
  return (
    <div
      className="flex w-full h-full"
      onClick={() => {
        onClick();
      }}
    >
      <div className="flex justify-center gap-2 p-2 w-full border  rounded-full hover:bg-blue-400 hover:cursor-pointer">
        {children}
      </div>
    </div>
  );
}
