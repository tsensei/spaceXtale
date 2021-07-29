export const launch_query = (id) => {
  return {
    query: {
      _id: id,
    },
    options: {
      populate: [
        {
          path: "launchpad",
          select: {
            full_name: 1,
          },
        },
        {
          path: "ships",
          select: {
            name: 1,
            image: 1,
            active: 1,
            launches: 1,
            type: 1,
          },
        },
        {
          path: "payloads",
          select: {
            name: 1,
            type: 1,
            orbit: 1,
            mass_kg: 1,
            customers: 1,
            nationalities: 1,
            manufacturers: 1,
          },
        },
        // "payloads",
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
      ],
    },
  };
};
