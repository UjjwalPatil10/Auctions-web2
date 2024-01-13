export default {
    // this is server related configuration if our server is change then we come here and
    // make changes and we also take json in that we don't need to rebuild,reconstruct json is recommended
    serverBaseURL: "http://localhost:4000",
    api: {
        auctions: {
        //here don't need to add id we just pass data here
        create: "/auctions",
        update: "/auctions/",
        delete: "/auctions/",
        getOne: "/auctions",
        getAll: "/auctions",
      },
    },
  };