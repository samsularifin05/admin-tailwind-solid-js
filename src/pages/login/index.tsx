import { createEffect, createSignal } from "solid-js";
import { setLoading, setThemes, showToast } from "../../utils";
import { useNavigate } from "@solidjs/router";
import { getItem, setItem } from "../../utils";
import { UserDataInterFace } from "../../interface";
const Login = () => {
  createEffect(() => {
    setThemes({ sidebar: false, header: false, blankScreen: false });
  });

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword());
  };
  const navigate = useNavigate();
  const login = (event: Event) => {
    event.preventDefault();
    setLoading({ screen: true });

    setTimeout(() => {
      if (username() === "admin" && password() === "admin") {
        navigate("/dashboard");
        setThemes({ sidebar: true, header: true, blankScreen: true });
        setItem<UserDataInterFace>("userdata", {
          username: username(),
          password: password()
        });
        setLoading({ screen: false });
      } else {
        setLoading({ screen: false });
        showToast("Username Password Salah");
      }
    }, 1000);
  };

  createEffect(() => {
    if (getItem<UserDataInterFace>("userdata").username) {
      setThemes({ sidebar: true, header: true, blankScreen: true });
      navigate("/dashboard");
    }
    setUsername("admin");
    setPassword("admin");
  });

  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Login</h2>

        <form onSubmit={login}>
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukan Username"
              class="mt-1 p-2 w-full border rounded-md"
              autocomplete="current-username"
              value={username()}
              onInput={(e: Event) =>
                setUsername((e.target as HTMLInputElement).value)
              }
            />
          </div>

          <div class="mb-4">
            <label
              for="password"
              class="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div class="relative">
              <input
                type={showPassword() ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukan Password"
                class="mt-1 p-2 w-full border rounded-md"
                value={password()}
                autocomplete="current-password"
                onInput={(e) => setPassword(e.target.value)}
              />
              <span
                class="absolute inset-y-0 right-0 pr-2 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword() ? (
                  <i class="fa fa-eye" />
                ) : (
                  <i class="fa fa-eye-slash" />
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white p-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
