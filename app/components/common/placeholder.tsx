/**
 * Simple placeholder component for unfinished pages.
 * Used during early development to verify routing and layout.
 */
export default function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>
      <p className="text-muted-foreground">
        {description ?? 'This page is under construction.'}
      </p>
    </section>
  );
}
