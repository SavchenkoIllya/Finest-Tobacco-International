export async function getGlobal() {
  let response = await fetch(
    "http://localhost:1337/api/global?populate[0]=video&populate[1]=Header&populate[2]=Header.logo&populate[3]=Header.Contacts&populate[4]=Header.Contacts.icon",
    {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
      },
    },
  );

  response = await response.json();
  if (response) return response;
}
