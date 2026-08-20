export const WORKSHOP_SOURCE = "Workshop";

export const WORKSHOP_REGISTRATION_TYPES = [
  "Applied through Workshop QR",
  "Registered at the Workshop",
];

export const isWorkshopSource = (source) =>
  String(source || "")
    .trim()
    .toLowerCase() === "workshop";

/** Format YYYY-MM-DD for display / backend label */
export const formatWorkshopDateLabel = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
