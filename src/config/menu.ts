export const sidebarMenu = [
  { label: "Dashboard", href: "/dashboard", icon: "fa-solid fa-house" },
  {
    label: "Pages",
    href: "/pages",
    icon: "fa-solid fa-file",
    submenu: [
      { label: "User", href: "/user" },
      { label: "Contact Us", href: "/contact-us" }
    ]
  },
  {
    label: "Menu",
    href: "#",
    icon: "fa-solid fa-file",
    submenu: [
      {
        label: "Sub Menu",
        href: "#",
        submenu: [
          { label: "Menu Item 1", href: "#" },
          { label: "Menu Item 2", href: "W" }
        ]
      },
      { label: "Master Group", href: "W" }
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
