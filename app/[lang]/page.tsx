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

export type HomePageProps = Readonly<{
  searchParams?: Promise<HomePageSearchParams>;
  params: { lang: string };
}>;

export default function Home(props: HomePageProps) {
  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header />
        <Hero />
        <About />
        {/*<CatalogueSection*/}
        {/*  searchParams={props.searchParams}*/}
        {/*  params={props.params}*/}
        {/*/>*/}
        <StaticCataloguePage
          searchParams={props.searchParams}
          params={props.params}
        />
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
