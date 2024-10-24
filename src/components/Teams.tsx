import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import ButtonStandard from "./ButtonStandard";
import Standings from "./Standings";

type Props = {};

export default function Teams({}: Props) {
  const [team1, setTeam1] = useState("Walzl");
  const [team2, setTeam2] = useState("Flatz");
  const [showDialog, setShowDialog] = useState(false);
  const [newTameName, setNewTameName] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(-1);

  const onChange = (input: any) => {
    setNewTameName(input);
  };

  const onKeyPress = (button: any) => {};
  return (
    <div className="font-extrabold text-3xl w-screen">
      {showDialog && (
        <div className="absolute z-50 w-screen h-screen top-0 left-0 bottom-0 right-0 bg-white flex flex-col justify-center items-center">
          <h1 className="mb-4">{selectedTeam == 1 ? "Team1" : "Team2"}</h1>
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
          <div className="w-3/4 mt-4">
            <Keyboard onChange={onChange} onKeyPress={onKeyPress} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 font-extrabold text-3xl w-screen">
        <div
          className="text-3xl flex items-center justify-end hover:cursor-pointer"
          onClick={() => {
            setShowDialog(true);
            setNewTameName("");
            setSelectedTeam(1);
          }}
        >
          {team1}
        </div>
        <Standings />
        <div
          className="text-3xl flex items-center hover:cursor-pointer"
          onClick={() => {
            setShowDialog(true);
            setNewTameName("");
            setSelectedTeam(2);
          }}
        >
          {team2}
        </div>
      </div>
    </div>
  );
}
