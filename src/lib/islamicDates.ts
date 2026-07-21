// In a real-world scenario, you would use a library like 'hijri-date' or an API.
// For demonstration, we'll keep it simple and set a manual toggle or check some fixed dates.

// SET TO TRUE FOR DEMONSTRATION PURPOSES (Since we are testing outside of Ramadan)
export const FORCE_RAMADAN_MODE = false;

export function checkIsIslamicSpecialDay(date = new Date()) {
  if (FORCE_RAMADAN_MODE) {
    return {
      isSpecial: true,
      eventName: "Ramazan Ayı",
      message: "Ramazan ayının bereketi üzerinize olsun. Kutsal aylarda rüyaların manevi mesajları daha güçlüdür.",
      theme: "ramadan" // can be 'ramadan', 'kandil' etc.
    };
  }

  // Example logic for real checks in the future:
  // const year = date.getFullYear();
  // const month = date.getMonth();
  // const day = date.getDate();
  // 
  // // Example: Ramadan 2027 (approx March 9 - April 8)
  // if (year === 2027 && ((month === 2 && day >= 9) || (month === 3 && day <= 8))) {
  //   return { isSpecial: true, eventName: "Ramazan Ayı", theme: "ramadan" };
  // }

  return { isSpecial: false, eventName: "", message: "", theme: "default" };
}
