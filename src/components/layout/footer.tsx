export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black py-3">
      <div className="container-width flex flex-col gap-2 text-sm font-medium text-zinc-300 sm:flex-row sm:items-center sm:justify-center">
        <p>@ {new Date().getFullYear()} DKN All rights reserved</p>
      </div>
    </footer>
  );
}
