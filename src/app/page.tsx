import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="h-1 invisible">Introduction</h1>
        <p className="text-2xl"> Hello there! My name is </p>
        <p className="text-4xl font-bold"> Brandon Wong </p>
        <p className="text-xl"> I study Electrical Engineering and Computer Science at UC Berkeley.</p>
        <div className="h-5 invisible"></div>
        <p className="text-xl"> Welcome to my (very WIP) personal website!</p>
        <div className="h-20 invisible"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="mx-auto w-fit">
          <Button>Button Here</Button>
        </div>
      </footer>
    </div>
  );
}
