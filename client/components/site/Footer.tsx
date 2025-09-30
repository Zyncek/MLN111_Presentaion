export function Footer() {
  return (
    <footer className="border-t">
      <div className="container grid gap-4 py-10 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold tracking-wide text-foreground/70">
            Nguồn tham khảo
          </h3>
          <ul className="space-y-1 text-sm text-foreground/80">
            <li>
              <a
                className="underline decoration-dotted underline-offset-4 hover:text-foreground"
                href="https://www.marxists.org/"
                target="_blank"
                rel="noreferrer"
              >
                Marxists.org
              </a>
            </li>
            <li>
              Giáo trình Triết học Mác - Lênin
            </li>
          </ul>
        </div>
        <div className="flex items-end justify-start md:justify-end">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Triết học Mác - Lênin. Thiết kế tông pastel.
          </p>
        </div>
      </div>
    </footer>
  );
}
