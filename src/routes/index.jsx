import Counter from "~/components/Counter";
import { Link } from "solid-app-router";
import { createSignal } from "solid-js";
import { createResource } from "solid-js";

export default function Home() {
  const [ws, setws] = createSignal();
  const fetchUser = async (platform) =>
    (await fetch(`https://api.tenno.dev/${platform}`)).json();
  const [platform, setplatform] = createSignal('pc');

  const [data, { mutate, refetch }] = createResource(platform, fetchUser);

  setInterval(() => {
    refetch()
  }, 60000);
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
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
      <button
        class="w-[50px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"
        onClick={() => setplatform('pc')}>
        pc
      </button>
      <button
        class="w-[50px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"
        onClick={() => setplatform('ps4')}>
        PS4
      </button>
      <button
        class="w-[50px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"
        onClick={() => setplatform('xb1')}>
        xb1
      </button>
      <button
        class="w-[50px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[1rem] py-[1rem]"
        onClick={() => setplatform('swi')}>
        swi
      </button>
      {platform()}
      <span>{data.loading && "Loading..."}</span>

      <div>
         {JSON.stringify(data())}  
      </div>
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
