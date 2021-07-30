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

export const starlink_query_all = (offset, limit) => {
  return {
    options: {
      offset: offset,
      limit: limit,
      select: {
        latitude: 1,
        longitude: 1,
        height_km: 1,
        velocity_kms: 1,
        "spaceTrack.OBJECT_NAME": 1,
        "spaceTrack.REV_AT_EPOCH": 1,
        "spaceTrack.LAUNCH_DATE": 1,
        "spaceTrack.DECAY_DATE": 1,
        "spaceTrack.DECAYED": 1,
        "spaceTrack.PERIOD": 1,
        "spaceTrack.EPOCH": 1,
      },
    },
  };
};

export const starlink_query_active = (offset, limit) => {
  return {
    query: {
      "spaceTrack.DECAYED": {
        $ne: 1,
      },
    },
    options: {
      offset: offset,
      limit: limit,
      select: {
        latitude: 1,
        longitude: 1,
        height_km: 1,
        velocity_kms: 1,
        "spaceTrack.OBJECT_NAME": 1,
        "spaceTrack.REV_AT_EPOCH": 1,
        "spaceTrack.LAUNCH_DATE": 1,
        "spaceTrack.DECAY_DATE": 1,
        "spaceTrack.DECAYED": 1,
        "spaceTrack.PERIOD": 1,
        "spaceTrack.EPOCH": 1,
      },
    },
  };
};

export const starlink_query_inactive = (offset, limit) => {
  return {
    query: {
      "spaceTrack.DECAYED": {
        $ne: 0,
      },
    },
    options: {
      offset: offset,
      limit: limit,
      select: {
        latitude: 1,
        longitude: 1,
        height_km: 1,
        velocity_kms: 1,
        "spaceTrack.OBJECT_NAME": 1,
        "spaceTrack.REV_AT_EPOCH": 1,
        "spaceTrack.LAUNCH_DATE": 1,
        "spaceTrack.DECAY_DATE": 1,
        "spaceTrack.DECAYED": 1,
        "spaceTrack.PERIOD": 1,
        "spaceTrack.EPOCH": 1,
      },
    },
  };
};
