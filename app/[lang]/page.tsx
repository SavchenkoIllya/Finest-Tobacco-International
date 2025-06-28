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
import { Global } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import { globalQuery } from "@/app/actions";

export type HomePageProps = {
  searchParams?: Promise<HomePageSearchParams>;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }];
}

export default async function Home() {
  let data: Global | null = null;

  try {
    const res = await axiosClient(
      `${StrapiRoutes.GET_GLOBALS}?${globalQuery}`,
      { method: "GET" },
    );
    data = await res.data.data;
  } catch (e) {
    console.error(e);
  }

  return (
    <main className={"overflow-hidden"}>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />
        <About />
        <Production />
        <ContactsSection />
      </div>
    </main>
  );
}
