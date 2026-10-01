import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="grid min-h-svh place-items-center px-6">
        <p className="max-w-md text-center text-xl font-light leading-relaxed">
          The hero ends here. Scroll back up to watch the object move in reverse.
        </p>
      </section>
    </main>
  );
}
