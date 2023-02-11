import type { Page } from "@context/Pages";

export const App = ({ page }: { page: Page }) => {
  return (
    <main>
      <div
        dangerouslySetInnerHTML={{
          __html: page.html,
        }}
      />
    </main>
  );
};
