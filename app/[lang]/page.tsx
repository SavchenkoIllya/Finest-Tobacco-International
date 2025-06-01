import {
  About,
  AgeModal,
  ContactsSection,
  Header,
  Hero,
  HomePageSearchParams,
  Production,
  ScrollIndicator,
} from "@/app/ui";
import { StaticCataloguePage } from "@/app/ui/landing/sections/StaticCataogue";

export type HomePageProps = {
  searchParams?: Promise<HomePageSearchParams>;
  params: { lang: string };
};

export default function Home(props: HomePageProps) {
  const isCatalogueEnabled = false;

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header />
        <Hero />
        <About />
        {isCatalogueEnabled && (
          <StaticCataloguePage
            searchParams={props.searchParams}
            params={props.params}
          />
        )}
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
