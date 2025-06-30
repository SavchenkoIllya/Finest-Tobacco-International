import {
  About,
  AgeModal,
  ContactsSection,
  Header,
  Hero,
  Production,
  ScrollIndicator,
} from "@/app/ui";
import { Global } from "@/app/types";
import { axiosClient, StrapiRoutes } from "@/app/lib";
import { globalQuery } from "@/app/actions";

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

  console.log(process.env.NODE_ENV);

  return (
    <>
      <AgeModal />
      <ScrollIndicator />
      <div className={"relative "}>
        <Header header_content={data?.Header} />
        <Hero video_url={data?.video?.url} />
        <About />
        <Production />
        <ContactsSection />
      </div>
    </>
  );
}
