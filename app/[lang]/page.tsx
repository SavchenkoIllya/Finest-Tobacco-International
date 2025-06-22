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
import { getGlobal } from "@/app/actions/strapi";

export type HomePageProps = {
  searchParams?: Promise<HomePageSearchParams>;
  params: Promise<{ lang: string }>;
};

export default async function Home(props: HomePageProps) {
  const global = await getGlobal();
  const isCatalogueEnabled = false;

  console.log(global);

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header />
        <Hero video_url={global?.data?.video?.url} />
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
// http://localhost:1337/uploads/bacio_sunset_527dbd7de5.jpg
