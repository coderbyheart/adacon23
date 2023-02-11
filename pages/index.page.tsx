import { Provider as PagesProvider } from "@context/Pages";
import { App } from "@page/App";
import type { IndexPageProps } from "./index.page.server";

export const Page = ({ pages, page }: IndexPageProps) => (
  <PagesProvider pages={pages}>
    <App page={page} />
  </PagesProvider>
);
