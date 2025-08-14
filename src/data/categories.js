// categories for coupons
export const categories = [
  { name: "الكل", icon: "📦" },
  { name: "طعام", icon: "🍔" },
  { name: "ملابس", icon: "👕" },
  { name: "تعليم", icon: "🎓" },
  { name: "أدوات مدرسية", icon: "📝" },
  { name: "كشوفات", icon: "🥼" },
  { name: "خصومات", icon: "🏷️" },
  { name: "كهرباء", icon: "💡" },
  { name: "خدمات", icon: "🛠️" },
];

// options for Coupon form
export const categoryOptions = categories
  .filter((cat) => cat.name !== "الكل")
  .map((cat) => ({ value: cat.name, label: cat.name }));
