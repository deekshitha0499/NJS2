const getNavItemsForExample = () => {
 return fetch("https://api.github.com/repos/Njs2/njs2-demo/contents/src/methods")
    .then((data) => data.json())
    .then((contents) => {
      return contents
        .filter((d: any) => d.name.startsWith("example"))
        .map((d: any) => {
          return { example_name: d.name.split("example.")[1], sha: d.sha };
        });
    });
};
export { getNavItemsForExample };
