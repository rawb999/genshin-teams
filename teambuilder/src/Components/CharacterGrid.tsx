import React, { useState, useEffect } from "react";
import Character from "./Character";

import xianyunImage from "../Images/xianyun.png";
import gamingImage from "../Images/Gaming.png";
import chevreuseImage from "../Images/chevreuse.png";
import naviaImage from "../Images/navia.png";
import furinaImage from "../Images/furina.png";
import charlotteImage from "../Images/charlotte.png";
import wriothesleyImage from "../Images/wriothesley.png";
import neuvilletteImage from "../Images/neuvillette.png";
import freminetImage from "../Images/freminet.png";
import lyneyImage from "../Images/liney.png";
import lynetteImage from "../Images/linette.png";
import kiraraImage from "../Images/kirara.png";
import baizhuImage from "../Images/baizhuer.png";
import kavehImage from "../Images/kaveh.png";
import mikaImage from "../Images/mika.png";
import dehyaImage from "../Images/dehya.png";
import alhaithamImage from "../Images/alhatham.png";
import yaoyaoImage from "../Images/yaoyao.png";
import wandererImage from "../Images/wanderer.png";
import faruzanImage from "../Images/faruzan.png";

import laylaImage from "../Images/layla.png";
import nahidaImage from "../Images/nahida.png";
import nilouImage from "../Images/nilou.png";
import cynoImage from "../Images/cyno.png";
import candaceImage from "../Images/candace.png";
import doriImage from "../Images/dori.png";
import tighnariImage from "../Images/tighnari.png";
import colleiImage from "../Images/collei.png";
import heizouImage from "../Images/heizo.png";
import kukiImage from "../Images/shinobu.png";
import yelanImage from "../Images/yelan.png";
import ayatoImage from "../Images/ayato.png";
import yaeImage from "../Images/yae.png";
import shenheImage from "../Images/shenhe.png";
import yunjinImage from "../Images/yunjin.png";
import ittoImage from "../Images/itto.png";
import gorouImage from "../Images/gorou.png";
import thomaImage from "../Images/tohma.png";
import kokomiImage from "../Images/kokomi.png";
import raidenImage from "../Images/raiden.png";

import saraImage from "../Images/sara.png";
import yoimiyaImage from "../Images/yoimiya.png";
import sayuImage from "../Images/sayu.png";
import ayakaImage from "../Images/ayaka.png";
import kazuhaImage from "../Images/kazuha.png";
import eulaImage from "../Images/eula.png";
import yanfeiImage from "../Images/feiyan.png";
import rosariaImage from "../Images/rosaria.png";
import hutaoImage from "../Images/hutao.png";
import xiaoImage from "../Images/xiao.png";
import ganyuImage from "../Images/ganyu.png";
import albedoImage from "../Images/albedo.png";
import zhongliImage from "../Images/zhongli.png";
import xinyanImage from "../Images/xinyan.png";
import tartagliaImage from "../Images/tartaglia.png";
import dionaImage from "../Images/diona.png";
import kleeImage from "../Images/klee.png";
import ventiImage from "../Images/venti.png";
import keqingImage from "../Images/keqing.png";
import monaImage from "../Images/mona.png";

import qiqiImage from "../Images/qiqi.png";
import dilucImage from "../Images/diluc.png";
import jeanImage from "../Images/jeanne.png";
import sucroseImage from "../Images/sucrose.png";
import chongyunImage from "../Images/chongyun.png";
import noelleImage from "../Images/noelle.png";
import bennettImage from "../Images/bennett.png";
import fischlImage from "../Images/fischl.png";
import ningguangImage from "../Images/ningguang.png";
import xingqiuImage from "../Images/xingqiu.png";
import beidouImage from "../Images/beidou.png";
import xianglingImage from "../Images/xiangling.png";
import razorImage from "../Images/razor.png";
import barbaraImage from "../Images/barbara.png";
import lisaImage from "../Images/lisa.png";
import kaeyaImage from "../Images/kaeya.png";
import amberImage from "../Images/amber.png";
import travellerImage from "../Images/lumine.png";

const characters = [
  {
    id: 1,
    name: "xianyun",
    imageSrc: xianyunImage,
    teamTypes: ["Vape Plunge Support", "Plunge Support", "Xiao Support"],
  },
  {
    id: 2,
    name: "gaming",
    imageSrc: gamingImage,
    teamTypes: ["Vape", "Mono-Pyro"],
  },
  {
    id: 3,
    name: "chevreuse",
    imageSrc: chevreuseImage,
    teamTypes: ["Overload"],
  },
  { id: 4, name: "navia", imageSrc: naviaImage, teamTypes: ["Crystallize"] },
  { id: 5, name: "furina", imageSrc: furinaImage, teamTypes: [] },
  {
    id: 6,
    name: "charlotte",
    imageSrc: charlotteImage,
    teamTypes: ["Monocryo/Freeze"],
  },
  {
    id: 7,
    name: "wriothesley",
    imageSrc: wriothesleyImage,
    teamTypes: ["Reverse Melt", "Mono Cryo"],
  },
  {
    id: 8,
    name: "neuvillette",
    imageSrc: neuvilletteImage,
    teamTypes: ["Hypercarry", "Hyperbloom"],
  },
  {
    id: 9,
    name: "freminet",
    imageSrc: freminetImage,
    teamTypes: ["Physical", "Cryo"],
  },
  { id: 10, name: "lyney", imageSrc: lyneyImage, teamTypes: ["Mono Pyro"] },
  { id: 11, name: "lynette", imageSrc: lynetteImage, teamTypes: [] },
  {
    id: 12,
    name: "kirara",
    imageSrc: kiraraImage,
    teamTypes: ["Quicken", "Bloom"],
  },
  {
    id: 13,
    name: "baizhu",
    imageSrc: baizhuImage,
    teamTypes: ["Bloom", "Quicken"],
  },
  { id: 14, name: "kaveh", imageSrc: kavehImage, teamTypes: ["Bloom"] },
  {
    id: 15,
    name: "mika",
    imageSrc: mikaImage,
    teamTypes: ["Physical Support"],
  },
  {
    id: 16,
    name: "dehya",
    imageSrc: dehyaImage,
    teamTypes: ["Monopyro", "Hyperburgeon"],
  },
  {
    id: 17,
    name: "alhaitham",
    imageSrc: alhaithamImage,
    teamTypes: ["On-Field"],
  },
  {
    id: 18,
    name: "yaoyao",
    imageSrc: yaoyaoImage,
    teamTypes: ["Quicken", "Nilou Bloom"],
  },
  {
    id: 19,
    name: "wanderer",
    imageSrc: wandererImage,
    teamTypes: ["Hypercarry"],
  },
  {
    id: 20,
    name: "faruzan",
    imageSrc: faruzanImage,
    teamTypes: ["Wanderer Hypercarry", "Xiao Hypercarry", "Anemo Quickswap"],
  },

  {
    id: 21,
    name: "layla",
    imageSrc: laylaImage,
    teamTypes: ["Freeze", "Mono Cryo"],
  },
  {
    id: 22,
    name: "nahida",
    imageSrc: nahidaImage,
    teamTypes: ["Quicken", "Hyperbloom"],
  },
  { id: 23, name: "nilou", imageSrc: nilouImage, teamTypes: ["Bloom"] },
  {
    id: 24,
    name: "cyno",
    imageSrc: cynoImage,
    teamTypes: ["Hyperbloom", "Aggravate"],
  },
  {
    id: 25,
    name: "candace",
    imageSrc: candaceImage,
    teamTypes: ["Vaporize", "Freeze"],
  },
  { id: 26, name: "dori", imageSrc: doriImage, teamTypes: ["Aggravate"] },
  {
    id: 27,
    name: "tighnari",
    imageSrc: tighnariImage,
    teamTypes: ["Aggravate"],
  },
  {
    id: 28,
    name: "collei",
    imageSrc: colleiImage,
    teamTypes: ["Quicken", "Bloom"],
  },
  {
    id: 29,
    name: "heizou",
    imageSrc: heizouImage,
    teamTypes: ["Electro-Charged/Hyperbloom", "Reverse Vape"],
  },
  { id: 30, name: "kuki", imageSrc: kukiImage, teamTypes: ["Hyperbloom"] },
  {
    id: 31,
    name: "yelan",
    imageSrc: yelanImage,
    teamTypes: ["Hyperbloom", "Pyro Enabler", "Taser"],
  },
  {
    id: 32,
    name: "ayato",
    imageSrc: ayatoImage,
    teamTypes: ["Overvape", "Hyperbloom"],
  },
  {
    id: 33,
    name: "yae",
    imageSrc: yaeImage,
    teamTypes: ["Quicken", "Electro-Charged"],
  },
  {
    id: 34,
    name: "shenhe",
    imageSrc: shenheImage,
    teamTypes: ["Freeze", "Mono Cryo"],
  },
  { id: 35, name: "yunjin", imageSrc: yunjinImage, teamTypes: [] },
  { id: 36, name: "itto", imageSrc: ittoImage, teamTypes: ["3x Geo"] },
  { id: 37, name: "gorou", imageSrc: gorouImage, teamTypes: ["Support"] },
  { id: 38, name: "thoma", imageSrc: thomaImage, teamTypes: ["Burgeon"] },
  { id: 39, name: "kokomi", imageSrc: kokomiImage, teamTypes: [] },
  {
    id: 40,
    name: "raiden",
    imageSrc: raidenImage,
    teamTypes: ["Hypercarry", "Hyperbloom"],
  },

  {
    id: 41,
    name: "sara",
    imageSrc: saraImage,
    teamTypes: ["Raiden Hyper", "Quicken Keqing"],
  },
  {
    id: 42,
    name: "yoimiya",
    imageSrc: yoimiyaImage,
    teamTypes: ["Vaporize", "Overvape"],
  },
  {
    id: 43,
    name: "sayu",
    imageSrc: sayuImage,
    teamTypes: ["Off-Field Aggravate", "On-Field Driver"],
  },
  {
    id: 44,
    name: "ayaka",
    imageSrc: ayakaImage,
    teamTypes: ["Freeze", "Monocryo"],
  },
  {
    id: 45,
    name: "kazuha",
    imageSrc: kazuhaImage,
    teamTypes: ["Freeze", "Reverse Vape"],
  },
  { id: 46, name: "eula", imageSrc: eulaImage, teamTypes: ["Superconduct"] },
  {
    id: 47,
    name: "yanfei",
    imageSrc: yanfeiImage,
    teamTypes: ["Vaporize", "Mono Pyro"],
  },
  {
    id: 48,
    name: "rosaria",
    imageSrc: rosariaImage,
    teamTypes: ["Reverse Melt DPS", "Freeze"],
  },
  {
    id: 49,
    name: "hutao",
    imageSrc: hutaoImage,
    teamTypes: ["2x Hydro", "VV Vape"],
  },
  { id: 50, name: "xiao", imageSrc: xiaoImage, teamTypes: ["HyperCarry"] },
  {
    id: 51,
    name: "ganyu",
    imageSrc: ganyuImage,
    teamTypes: ["Freeze", "Melt"],
  },
  {
    id: 52,
    name: "albedo",
    imageSrc: albedoImage,
    teamTypes: ["Geo Support", "2x Geo Core"],
  },
  { id: 53, name: "zhongli", imageSrc: zhongliImage, teamTypes: ["2x Geo"] },
  {
    id: 54,
    name: "xinyan",
    imageSrc: xinyanImage,
    teamTypes: ["Physical / Superconduct", "Mono Pyro", "Support"],
  },
  {
    id: 55,
    name: "tartaglia",
    imageSrc: tartagliaImage,
    teamTypes: ["Reverse Vape"],
  },
  {
    id: 56,
    name: "diona",
    imageSrc: dionaImage,
    teamTypes: ["Freeze/Monocryo", "Cryo Battery Support"],
  },
  {
    id: 57,
    name: "klee",
    imageSrc: kleeImage,
    teamTypes: ["Mono Pyro", "Vaporize"],
  },
  {
    id: 58,
    name: "venti",
    imageSrc: ventiImage,
    teamTypes: ["Freeze", "Electro-Charged"],
  },
  {
    id: 59,
    name: "keqing",
    imageSrc: keqingImage,
    teamTypes: ["Aggravate", "Driver"],
  },
  {
    id: 60,
    name: "mona",
    imageSrc: monaImage,
    teamTypes: ["Electro Charged", "Freeze"],
  },

  { id: 61, name: "qiqi", imageSrc: qiqiImage, teamTypes: ["On-Field"] },
  { id: 62, name: "diluc", imageSrc: dilucImage, teamTypes: ["Vape", "Melt"] },
  { id: 63, name: "jean", imageSrc: jeanImage, teamTypes: [] },
  {
    id: 64,
    name: "sucrose",
    imageSrc: sucroseImage,
    teamTypes: ["On-Field Taser", "Off-Field Vape"],
  },
  {
    id: 65,
    name: "chongyun",
    imageSrc: chongyunImage,
    teamTypes: ["Melt", "Cryo"],
  },
  { id: 66, name: "noelle", imageSrc: noelleImage, teamTypes: ["On-Field"] },
  { id: 67, name: "bennett", imageSrc: bennettImage, teamTypes: ["Support"] },
  {
    id: 68,
    name: "fischl",
    imageSrc: fischlImage,
    teamTypes: ["Aggravate", "Electrocharged"],
  },
  {
    id: 69,
    name: "ningguang",
    imageSrc: ningguangImage,
    teamTypes: ["On-Field"],
  },
  {
    id: 70,
    name: "xingqiu",
    imageSrc: xingqiuImage,
    teamTypes: ["Hyperbloom", "Pyro Enabler", "Taser"],
  },
  {
    id: 71,
    name: "beidou",
    imageSrc: beidouImage,
    teamTypes: ["Electrocharged", "Hyperbloom"],
  },
  {
    id: 72,
    name: "xiangling",
    imageSrc: xianglingImage,
    teamTypes: ["Off-Field DPS"],
  },
  { id: 73, name: "razor", imageSrc: razorImage, teamTypes: ["On-Field"] },
  { id: 74, name: "barbara", imageSrc: barbaraImage, teamTypes: [] },
  {
    id: 75,
    name: "lisa",
    imageSrc: lisaImage,
    teamTypes: ["Aggravate", "Quickbloom"],
  },
  {
    id: 76,
    name: "kaeya",
    imageSrc: kaeyaImage,
    teamTypes: ["Quickswap Freeze", "Reverse Melt"],
  },
  {
    id: 77,
    name: "amber",
    imageSrc: amberImage,
    teamTypes: ["Melt", "Burgeon"],
  },
  //change these later to specific images
  {
    id: 78,
    name: "dendTrav",
    imageSrc: travellerImage,
    teamTypes: ["Electro Charged", "Quicken"],
  },
  { id: 79, name: "geoTrav", imageSrc: travellerImage, teamTypes: [] },
  { id: 80, name: "anemoTrav", imageSrc: travellerImage, teamTypes: [] },
  { id: 81, name: "hydroTrav", imageSrc: travellerImage, teamTypes: [] },
  { id: 82, name: "electroTrav", imageSrc: travellerImage, teamTypes: [] },
];
interface CharacterGridProps {
  onCharactersSelected: (selectedCharacterNames: string[]) => void;
}
const CharacterGrid: React.FC<CharacterGridProps> = ({
  onCharactersSelected,
}) => {
  const [selectedCharacters, setSelectedCharacters] = useState<string[]>(() => {
    const saved = localStorage.getItem("selectedCharacters");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      "selectedCharacters",
      JSON.stringify(selectedCharacters)
    );
  }, [selectedCharacters]);
  const [primaryCharacter, setPrimaryCharacter] = useState<string | null>(null);
  const [selectedTeamType, setSelectedTeamType] = useState<string | null>(null);
  const [isPrimarySelectionEnabled, setIsPrimarySelectionEnabled] =
    useState<boolean>(false);

  const handleCharacterClick = (characterName: string) => {
    if (isPrimarySelectionEnabled) {
      setPrimaryCharacter(characterName);
      setSelectedTeamType(null);

      if (!selectedCharacters.includes(characterName)) {
        setSelectedCharacters((prev) => [...prev, characterName]);
      }
      setIsPrimarySelectionEnabled(false); // Exit primary selection mode
    } else {
      if (primaryCharacter === characterName) {
        // If deselecting the primary character, also clear the primary status
        setPrimaryCharacter(null);
        setSelectedTeamType(null);
      }
      setSelectedCharacters((prev) =>
        prev.includes(characterName)
          ? prev.filter((name) => name !== characterName)
          : [...prev, characterName]
      );
    }
  };

  const selectAllCharacters = () => {
    const allCharacterNames = characters.map((character) => character.name);
    setSelectedCharacters(allCharacterNames);
  };

  const deselectAllCharacters = () => {
    setSelectedCharacters([]);
    setPrimaryCharacter(null);
    setSelectedTeamType(null);
  };

  /* http://127.0.0.1:5000/submit-characters  */
  /* https://stark-springs-59996-346d3e0956cb.herokuapp.com/submit-characters */
  const submitSelectedCharacters = async () => {
    if (!primaryCharacter) {
      alert("Please select a primary character before submitting.");
      return;
    }

    console.log("Selected Team Type:", selectedTeamType);
    if (!selectedTeamType) {
      alert("Please select a team type for your primary character.");
      return; // stop the submission if no team type is selected
    }

    const primaryCharData = characters.find(
      (char) => char.name === primaryCharacter
    );

    if (primaryCharData && primaryCharData.teamTypes.length === 0) {
      alert(
        "The selected primary character does not have any team types available. Please select a different primary character and try again."
      );
      return; //prevent submission if no team types are available
    }

    try {
      const response = await fetch("https://stark-springs-59996-346d3e0956cb.herokuapp.com/submit-characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedCharacters,
          primaryCharacter,
          selectedTeamType,
        }),
      });

      const data = await response.json();
      onCharactersSelected(data);
      console.log(data); //
    } catch (error) {
      console.error("Error submitting characters:", error);
    }
  };

  const renderTeamTypeDropdown = () => {
    if (!primaryCharacter) return null;

    const primaryCharData = characters.find(
      (char) => char.name === primaryCharacter
    );
    if (!primaryCharData) return null;

    if (primaryCharData.teamTypes.length === 0) {
      return <div>No team types available for {primaryCharData.name}.</div>;
    }

    return (
      <div className="team-type-dropdown">
        <label htmlFor="teamTypeSelect">
          Team type for {primaryCharData.name}:
        </label>
        <select
          id="teamTypeSelect"
          value={selectedTeamType || ""}
          onChange={(e) => setSelectedTeamType(e.target.value)}
          className="dropdown"
        >
          <option value="">Select Team Type</option>
          {primaryCharData.teamTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    
    <div>
      <header className="header">Select Characters</header>
      <p>
        Select the characters you own, select primary to select a character you
        want to base your team around, then select the type of team
      </p>

      
      <div className="buttonRow">
        <button
          className="fancyButton"
          onClick={() =>
            setIsPrimarySelectionEnabled(!isPrimarySelectionEnabled)
          }
        >
          {isPrimarySelectionEnabled
            ? "Cancel Primary Selection"
            : "Select Primary"}
        </button>

        {renderTeamTypeDropdown()}
        <button className="selectAllButton" onClick={selectAllCharacters}>
          Select All
        </button>
        <button className="deselectButton" onClick={deselectAllCharacters}>
          Deselect All
        </button>
      </div>
      <div className="character-grid">
        {characters.map(({ id, name, imageSrc }) => (
          <Character
            key={id}
            imageSrc={imageSrc}
            name={name}
            isSelected={selectedCharacters.includes(name)}
            isPrimary={name === primaryCharacter}
            onClick={() => handleCharacterClick(name)}
          />
        ))}
      </div>
      <button className="submitButton" onClick={submitSelectedCharacters}>
        Submit
      </button>
    </div>
  );
};

export default CharacterGrid;
