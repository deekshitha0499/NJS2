const getNavItemsForExample = () => {
  
 return fetch(
   "https://api.github.com/repos/ganeshsacharya/njs2-demo/contents/src/methods",
   {
     headers: new Headers({
       Authorization: process.env.NEXT_PUBLIC_Token || "",
     }),
   }
 )
   .then((data) => data.json())
   .then((contents) => {
     return contents
       .filter((d: any) => d.name.startsWith("example"))
       .map((d: any) => {
         return { example_name: d.name.split("example.")[1], url: d.git_url, html: d._links?.html };
       });
   });
};
export { getNavItemsForExample };
