import Counter from "~/components/Counter";
import { Link } from "solid-app-router";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";

export default function Home() {
  const [ws, setws] = createSignal();
  const fetchUser = async (id) =>
  (await fetch(`https://api.tenno.dev/${userId}`)).json();

    const userId = 'pc'
  const [data, { mutate, refetch }] = createResource(userId,fetchUser);

  setInterval(() => {
    refetch()
  }, 60000);
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <Link
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </Link>{" "}
        to learn how to build Solid apps.
      </p>
      <span>{data.loading && "Loading..."}</span>

      {JSON.stringify(data())}
       <p class="my-4">
        <span>Home</span>
        {" - "}
        <Link href="/about" class="text-sky-600 hover:underline">
          About Page
        </Link>{" "}
      </p>
    </main>
  );
}
