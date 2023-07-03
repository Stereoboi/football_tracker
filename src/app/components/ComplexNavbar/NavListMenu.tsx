import React from "react";
import {
  MenuItem,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  Card,
} from "../../components/MaterialTailwindReecsport";
import Link from "next/link";
import { SiPremierleague } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { GiNewspaper } from "react-icons/gi";

import {
  Square3Stack3DIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { navListMenuItems } from "../../../../util/navListStaff";

export function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(
    ({ title, description, path }, index) => (
      <Link href={path} key={title}>
        <MenuItem
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
          className="dark:hover:bg-blue-gray-700 "
        >
          <Typography
            variant="h6"
            className="mb-1 text-light-blue-800  dark:text-blue-gray-50 "
          >
            {title}
          </Typography>
          <Typography
            variant="small"
            className="font-normal text-light-blue-700  dark:text-white"
          >
            {description}
          </Typography>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2  lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid bg-white dark:bg-blue-gray-900 border-0"
        >
          <Card
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md bg-blue-600 dark:bg-gray-900"
          >
            {hoveredIndex === 0 ? (
              <SiPremierleague className="h-28 w-28 fill-white" />
            ) : hoveredIndex === 1 ? (
              <CiSearch strokeWidth={0.5} className="h-28 w-28 fill-white" />
            ) : hoveredIndex === 2 ? (
              <GiNewspaper strokeWidth={1} className="h-28 w-28 fill-white" />
            ) : (
              <SiPremierleague className="h-28 w-28 fill-white" />
            )}
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-light-blue-800 dark:text-white lg:hidden ">
        <Square3Stack3DIcon className="h-[18px] w-[18px] bg" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden ">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
