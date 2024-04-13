import Image from "next/image";
async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    message: "Hello, Dashboard!",
  };
}
export default async function Home() {
  const { message } = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {message}
    </main>
  );
}
