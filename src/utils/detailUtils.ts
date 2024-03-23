export const externalLinkToLocal = (link: string) => {
  const address = "http://localhost:5173/";
  const splited = link.split("/");
  return (
    address + splited[splited.length - 2] + "/" + splited[splited.length - 1]
  );
};
