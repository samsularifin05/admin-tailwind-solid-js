import { createSignal, For } from "solid-js";
import { sidebarMenu } from "../../../config";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}
const SubMenu = (props: { submenu: MenuItem[] }) => {
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
    <ul class="ml-4 mt-2 mb-2 ">
      <For each={props.submenu}>
        {(menuItem) => (
          <li>
            <a
              href={menuItem.submenu ? "#" : menuItem.href}
              onClick={() => toggleSubMenu(menuItem.label)}
              class="flex flex-row items-center gap-3 p-3 transition-colors rounded text-black hover:text-white focus:text-white hover:bg-black focus:bg-black aria-[current=page]:text-white aria-[current=page]:bg-black"
            >
              <div class="flex items-center self-center " />
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
                />
              )}
            </a>
            {menuItem.submenu && expandedMenus()[menuItem.label] && (
              <SubMenu submenu={menuItem.submenu} />
            )}
          </li>
        )}
      </For>
    </ul>
  );
};
const Sidebar = () => {
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
            <For each={sidebarMenu}>
              {(menuItem) => (
                <li class="px-3">
                  <a
                    href={menuItem.submenu ? "#" : menuItem.href}
                    onClick={() => toggleSubMenu(menuItem.label)}
                    class="flex flex-row items-center gap-3 p-3 transition-colors rounded text-black focus:text-white hover:text-white hover:bg-black focus:bg-black aria-[current=page]:text-white aria-[current=page]:bg-black"
                  >
                    <div class="flex items-center self-center ">
                      <i class={menuItem.icon} />
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
                      />
                    )}
                  </a>
                  {menuItem.submenu && expandedMenus()[menuItem.label] && (
                    <SubMenu submenu={menuItem.submenu} />
                  )}
                </li>
              )}
            </For>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
