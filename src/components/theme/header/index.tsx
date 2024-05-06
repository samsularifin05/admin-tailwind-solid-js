import { Show, For, createSignal } from "solid-js";
import { removeItem, setLoading } from "../../../utils";
import { useNavigate } from "@solidjs/router";

const Header = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen());
  };

  const handleLogout = () => {
    setLoading({ screen: true });
    removeItem("userdata");
    setTimeout(() => {
      navigate("/");
      setLoading({ screen: false });
    }, 3000);
  };

  const handleProfile = () => {};
  return (
    <header class="border-b-1 sticky top-0 z-40 border-b border-wuiSlate-200 bg-white/90 backdrop-blur-sm">
      <div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          class="flex h-[3.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            class="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-12 h-12 bg-emerald-500"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                fill="rgba(255,255,255,.2)"
              />
            </svg>
            Brand
          </a>
          <button
            class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              />
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
            </div>
          </button>

          <div class="flex items-center px-6 ml-auto lg:ml-3 lg:p-0 ">
            <div class="relative inline-flex items-center justify-center w-10 h-10 text-white rounded-full">
              <p>Admin</p>
              <img
                src="https://i.pravatar.cc/40?img=35"
                alt="user name"
                title="user name"
                width="40"
                height="40"
                class="max-w-full rounded-full cursor-pointer"
                onClick={handleDropdownToggle}
              />
              <Show when={isDropdownOpen()}>
                <div class="absolute right-0 mt-32 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <For each={["Profile", "Logout"]}>
                    {(option) => (
                      <button
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={
                          option === "Profile" ? handleProfile : handleLogout
                        }
                      >
                        {option}
                      </button>
                    )}
                  </For>
                </div>
              </Show>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
