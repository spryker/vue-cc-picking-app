export const productType = {
  fresh: "Fresh",
  chilled: "Chilled",
  frozen: "Frozen",
  ambient: "Ambient",
};

export const productTypes = [
  {
    name: "fresh",
    label: "Fresh",
    active: true,
    color: "#8EB826",
  },
  {
    name: "chilled",
    label: "Chilled",
    active: true,
    color: "#FF7800",
  },
  {
    name: "frozen",
    label: "Frozen",
    active: false,
    color: "#55C3F0",
  },
  {
    name: "ambient",
    label: "Ambient",
    active: true,
    color: "#FFC800",
  },
];

export const sortTypes = {
  earliest: "Earliest Pickup Time",
  latest: "Latest Pickup Time",
  largest: "Largest Order Size",
  smallest: "Smallest Order Size",
};
