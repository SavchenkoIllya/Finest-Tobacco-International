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
import { StaticCataloguePage } from "../ui/landing/sections/StaticCatalogue";
import { notFound } from "next/navigation";
import { getGlobal } from "@/app/actions";
import { Global } from "@/app/types";

export type HomePageProps = {
  searchParams?: Promise<HomePageSearchParams>;
  params: Promise<{ lang: string }>;
};

async function loader() {
  const data = await getGlobal();
  if (!data) notFound();
  return { ...data.data } as Global;
}

export default async function Home(props: Readonly<HomePageProps>) {
  const data = await loader();
  // const isCatalogueEnabled = false;

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />
        <About />
        {/*{isCatalogueEnabled && (*/}
        {/*  <StaticCataloguePage*/}
        {/*    searchParams={props.searchParams}*/}
        {/*    params={props.params}*/}
        {/*  />*/}
        {/*)}*/}
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
