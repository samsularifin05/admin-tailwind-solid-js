import { createSignal } from "solid-js";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}
const SubMenu = ({ submenu }: { submenu: MenuItem[] }) => {
  const [expandedMenus, setExpandedMenus] = createSignal<
    Record<string, boolean>
  >({});

  const toggleSubMenu = (label: string) => {
    setExpandedMenus((prev) => {
      const newState = { ...prev };
      newState[label] = !newState[label];
      return newState;
    });
  };
  return (
    <ul class="ml-4 mt-2 mb-2">
      {submenu.map((menuItem) => (
        <li>
          <a
            href={menuItem.submenu ? "#" : menuItem.href}
            onClick={() => toggleSubMenu(menuItem.label)}
            class="flex flex-row items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-emerald-500 hover:bg-emerald-50 focus:bg-emerald-50 aria-[current=page]:text-emerald-500 aria-[current=page]:bg-emerald-50 "
          >
            <div class="flex items-center self-center "></div>
            <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
              {menuItem.label}
            </div>
            {menuItem.submenu && (
              <i
                class={`fa-solid fa-chevron-down ${
                  expandedMenus()[menuItem.label] ? "transform rotate-180" : ""
                }`}
              ></i>
            )}
          </a>
          {menuItem.submenu && expandedMenus()[menuItem.label] && (
            <SubMenu submenu={menuItem.submenu} />
          )}
        </li>
      ))}
    </ul>
  );
};
const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: "fa-solid fa-house" },
    {
      label: "Pages",
      href: "/pages",
      icon: "fa-solid fa-file",
      submenu: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" }
      ]
    },
    {
      label: "Data Master",
      href: "/data-master",
      icon: "fa-solid fa-file",
      submenu: [
        {
          label: "Master Baki",
          href: "/about-us",
          submenu: [
            { label: "About Us", href: "/about-us" },
            { label: "Contact Us", href: "/contact-us" }
          ]
        },
        { label: "Master Group", href: "/contact-us" }
      ]
    },
    { label: "Calendar", href: "/calendar", icon: "fa-solid fa-calendar-days" },
    { label: "Reports", href: "/reports", icon: "fa-regular fa-folder-open" },
    {
      label: "Notifications",
      href: "/notifications",
      icon: "fa-solid fa-bell"
    },
    { label: "Team", href: "/team", icon: "fa-solid fa-people-group" }
  ];

  const [expandedMenus, setExpandedMenus] = createSignal<
    Record<string, boolean>
  >({});

  const toggleSubMenu = (label: string) => {
    setExpandedMenus((prev) => {
      const newState = { ...prev };
      newState[label] = !newState[label];
      return newState;
    });
  };
  return (
    <aside
      id="nav-menu-1"
      aria-label="Side navigation"
      class="fixed top-0 bottom-0 left-0 z-20 flex flex-col transition-transform -translate-x-full bg-white border-r w-72 sm:translate-x-0 border-r-slate-200"
    >
      <nav
        aria-label="side navigation"
        class="flex-1 overflow-auto divide-y divide-slate-100 "
      >
        <div>
          <ul class="flex flex-col flex-1 gap-1 py-[4rem]">
            {menuItems.map((menuItem) => (
              <li class="px-3">
                <a
                  href={menuItem.submenu ? "#" : menuItem.href}
                  onClick={() => toggleSubMenu(menuItem.label)}
                  class="flex flex-row items-center gap-3 p-3 transition-colors rounded text-slate-700 hover:text-emerald-500 hover:bg-emerald-50 focus:bg-emerald-50 aria-[current=page]:text-emerald-500 aria-[current=page]:bg-emerald-50 "
                >
                  <div class="flex items-center self-center ">
                    <i class={menuItem.icon}></i>
                  </div>
                  <div class="flex flex-col items-start justify-center flex-1 w-full gap-0 overflow-hidden text-sm truncate">
                    {menuItem.label}
                  </div>
                  {menuItem.submenu && (
                    <i
                      class={`fa-solid fa-chevron-down ${
                        expandedMenus()[menuItem.label]
                          ? "transform rotate-180"
                          : ""
                      }`}
                    ></i>
                  )}
                </a>
                {menuItem.submenu && expandedMenus()[menuItem.label] && (
                  <SubMenu submenu={menuItem.submenu} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
