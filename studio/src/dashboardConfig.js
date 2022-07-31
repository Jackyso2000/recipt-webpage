export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62e6960a767c756a62545d69",
                  title: "Sanity Studio",
                  name: "recipt-webpage-studio",
                  apiId: "44f620e4-dcd1-42ef-87e9-dd3b0816de82",
                },
                {
                  buildHookId: "62e6960bab662b6362cc1775",
                  title: "Blog Website",
                  name: "recipt-webpage",
                  apiId: "e2100f14-de1b-48b2-8e0d-2b5c2c81bb80",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jackyso2000/recipt-webpage",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://recipt-webpage.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
