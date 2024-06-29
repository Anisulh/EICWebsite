import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export interface IMenuItems {
  label: string;
  link: string;
}

export default function DropDown({
  label,
  menuItems,
}: {
  label: string;
  menuItems: IMenuItems[];
}) {
  return (
    <Menu>
      <MenuButton className="inline-flex gap-1 items-center hover:bg-emerald-300 p-0.5 rounded-md transition-colors">
        {label}
        <ChevronDownIcon className="size-4" />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border bg-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 "
      >
        {menuItems.map((item) => (
          <MenuItem key={item.label}>
            <a
              className="block transition-colors data-[focus]:bg-blue-100 px-4 py-2"
              href={item.link}
            >
              {item.label}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
