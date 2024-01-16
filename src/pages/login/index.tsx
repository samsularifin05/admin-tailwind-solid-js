import { createEffect, createSignal } from "solid-js";
import { setThemes, showToast } from "../../utils";
import { useNavigate } from "@solidjs/router";
const Login = () => {
  createEffect(() => {
    setThemes({ sidebar: false, header: false, blankScreen: false });
  });

  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const navigate = useNavigate();
  const login = (event: Event) => {
    event.preventDefault();
    if (username() === "admin" && password() === "admin") {
      navigate("/dashboard");
      setThemes({ sidebar: true, header: true, blankScreen: true });
    } else {
      showToast("Username Password Salah");
    }
  };

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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukan Password"
              class="mt-1 p-2 w-full border rounded-md"
              value={password()}
              autocomplete="current-password"
              onInput={(e: Event) =>
                setPassword((e.target as HTMLInputElement).value)
              }
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-500 text-white p-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
