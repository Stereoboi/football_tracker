import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

const navListMenuItems = [
  {
    title: "Leagues page",
    description: "Pick league ",
    path: "/leagues",
  },
  {
    title: "Search page",
    description: "Search info about club or player rhat you are interested in.",
    path: "/search",
  },
  {
    title: "News page",
    description: "Fresh football new from all over the world",
    path: "/news",
  },
];

const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];

export { navListItems, navListMenuItems, profileMenuItems };
