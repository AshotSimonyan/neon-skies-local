import { Icon } from "@iconify/react";
// routes

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: "Home",
    path: "/#home"
    // icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  { title: "SkyPunk NFTs", path: "/#skypunk" },
  // { title: "Labs", path: "/#labs" },
  { title: "Land Ownership", path: "/#landownership" },
  { title: "Game Assets", path: "/#gameassets" },
  { title: "$RAIN Flow", path: "/#tokenflow" },
  { title: "Neon Swap", path: "/#coinswaps" },
  // { title: "Distribution", path: "/#distribution" },
  // { title: "Tokenomics", path: "/#tokenomics" },
  { title: "Team", path: "/#team" }
];

export default menuConfig;
