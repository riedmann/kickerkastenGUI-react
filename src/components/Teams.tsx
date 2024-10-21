import { useState } from "react";
import ButtonStandard from "./ButtonStandard";
import Standings from "./Standings";

type Props = {};

export default function Teams({}: Props) {
  const [team1, setTeam1] = useState("Walzl");
  const [team2, setTeam2] = useState("Flatz");
  const [showDialog, setShowDialog] = useState(false);
  const [newTameName, setNewTameName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(-1);

  return (
    <div className="grid grid-cols-3 gap-8 font-extrabold text-3xl w-screen">
      {showDialog && (
        <div className="absolute z-50 w-screen h-screen top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center">
          <div>
            <input
              className="font-xl p-4 text-center  border rounded-md"
              type="text"
              value={newTameName}
              onChange={(el) => setNewTameName(el.target.value)}
            />
            <div
              className="flex gap-2 justify-center mt-4"
              onClick={() => setShowDialog(false)}
            >
              <ButtonStandard type="secondary" onClick={() => {}}>
                Cancel
              </ButtonStandard>
              <ButtonStandard
                onClick={() => {
                  if (selectedTeam == 1) {
                    setTeam1(newTameName);
                  } else {
                    setTeam2(newTameName);
                  }

                  setNewTameName("");

                  setShowDialog(false);
                }}
              >
                Save
              </ButtonStandard>
            </div>
          </div>
        </div>
      )}
      <div
        className="text-3xl flex items-center justify-end"
        onClick={() => {
          setShowDialog(true);
          setSelectedTeam(1);
        }}
      >
        {team1}
      </div>
      <Standings />
      <div
        className="text-3xl flex items-center"
        onClick={() => {
          setShowDialog(true);
          setSelectedTeam(2);
        }}
      >
        {team2}
      </div>
    </div>
  );
}
