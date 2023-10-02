export const getPositionAbbreviation = (position: string) => {
  switch (position.toLowerCase()) {
    case "attacker":
      return "FW";
    case "midfielder":
      return "MF";
    case "defender":
      return "DEF";
    case "goalkeeper":
      return "GK";
    default:
      return position;
  }
};

export const scorerRating = (rating: string) => {
  const finalRating = Number(rating) * 10;
  return Math.ceil(finalRating);
};

export const getZeroIfNull = (value: any) => {
  switch (value) {
    case null:
      return 0;

    default:
      return value;
  }
};
