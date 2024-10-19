import { useState } from "react";
import Button from "./Button";
import Standings from "./Standings";

type Props = {};

export default function Teams({}: Props) {
  const [team1, setTeam1] = useState("HTL Dornbirn");
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-8 font-extrabold text-3xl">
      {showDialog && (
        <div className="absolute z-50 w-screen h-screen top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center">
          <div>
            <input
              className="font-xl p-4 text-center  border rounded-md"
              type="text"
              value={team1}
              onChange={(el) => setTeam1(el.target.value)}
            />
            <div className="w-28 mt-4" onClick={() => setShowDialog(false)}>
              <Button onClick={() => {}}>Save</Button>
            </div>
          </div>
        </div>
      )}
      <div
        className="text-3xl flex items-center"
        onClick={() => {
          setShowDialog(true);
        }}
      >
        {team1}
      </div>
      <Standings />
      <div className="text-3xl flex items-center">Bregenz</div>
    </div>
  );
}
