import React from "react";
import { Session } from "next-auth";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Typography,
  Avatar,
} from "../../components/MaterialTailwindReecsport";
import {
  ChevronDownIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

export function ProfileMenu({ user }: Session) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { data: session } = useSession();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className=""
            src={user?.image!}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        const isLastItem = key === profileMenuItems.length - 1; return (
        <Link href={"/dashboard"}>
          <MenuItem className={`flex items-center gap-2 rounded `}>
            {React.createElement(UserCircleIcon, {
              className: `h-4 w-4 `,
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color="inherit"
            >
              Dashboard
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem
          onClick={() => signOut()}
          className={`flex items-center gap-2 rounded `}
        >
          {React.createElement(PowerIcon, {
            className: `h-4 w-4 text-red-500  `,
            strokeWidth: 2,
          })}
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Sign Out
          </Typography>
        </MenuItem>
        );
      </MenuList>
    </Menu>
  );
}
