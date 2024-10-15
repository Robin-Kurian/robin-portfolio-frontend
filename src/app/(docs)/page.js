import Docs from "@/components/docs/Docs";
import ServerRequest from "@/utils/serverRequest";

export const metadata = {
  title: "Robin's Project",
};

export default async function DocsPage(props) {
  const { response } = await ServerRequest.get("/api/package", {
    host: "http://localhost:3000",
  }); // for demo purpose only

  return <Docs packageData={response?.data} />;
}
