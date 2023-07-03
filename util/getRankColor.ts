const getRankColor = (description: string) => {
  if (
    [
      "UEFA Champions League Qualifiers",
      "Promotion - Champions League (Group Stage: )",
    ].includes(description)
  ) {
    return "bg-green-700";
  } else if (
    [
      "Promotion - Europa League (Group Stage: )",
      "UEFA Europa League Qualifiers",
    ].includes(description)
  ) {
    return "bg-red-700";
  } else if (
    [
      "Promotion - Europa Conference League (Qualification: )",
      "UEFA Conference League Qualifiers",
    ].includes(description)
  ) {
    return "bg-yellow-400";
  } else if (description && description.includes("Relegation")) {
    return "bg-moron";
  } else {
    return "bg-transparent";
  }
};

export default getRankColor;
