// categories for coupons
export const categories = [
  { name: "الكل", icon: "📦" },
  { name: "طعام", icon: "🍔" },
  { name: "ملابس", icon: "👕" },
  { name: "تعليم", icon: "🎓" },
  { name: "أدوات مدرسية", icon: "📝" },
  { name: "دواء", icon: "💊" },
  { name: "كشوفات", icon: "🥼" },
  { name: "خصومات", icon: "🏷️" },
  { name: "كهرباء", icon: "💡" },
  { name: "خدمات", icon: "🛠️" },
];

// options for Coupon form
export const categoryOptions = categories
  .filter((cat) => cat.name !== "الكل")
  .map((cat) => ({ value: cat.name, label: cat.name }));

// categoryPartners stores partner names for each category.
export const categoryPartners = {
  طعام: ["مطعم البركة", "جمعية الخير", "سوق النور"],
  ملابس: ["متجر الأناقة", "بيت الموضة", "محل الأمل"],
  تعليم: ["أكاديمية النجاح", "مركز المعرفة", "مدرسة المستقبل"],
  "أدوات مدرسية": ["مكتبة الأمل", "مكتبة النور", "مكتبة البيان"],
  دواء: ["صيدلية الشفاء", "صيدلية النور", "صيدلية الحياة"],
  كشوفات: ["مستشفى النور", "مركز الشفاء", "مستشفى الرحمة"],
  خصومات: ["متجر الخصم الكبير", "سوق التخفيضات", "مول العروض"],
  كهرباء: ["شركة النور للكهرباء", "خدمات الطاقة", "إلكترونيات الأمل"],
  خدمات: ["مؤسسة الخير", "مركز الخدمات", "جمعية الدعم"],
};
