export default function Newsletter() {
  return (
    <article className="container mx-auto py-6 grid items-center justify-center gap-2 text-center">
      <h2 className="text-2xl">Get latest jobs vacancies</h2>
      <form className="flex gap-1">
        <input type="email" />
        <button type="submit" className="py-1 px-3 text-white bg-teal-500">
          Subscibe
        </button>
      </form>
    </article>
  );
}
