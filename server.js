// 📌 استدعاء المكتبات
const express = require("express");
const bodyParser = require("body-parser");

// إنشاء التطبيق
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// مسار تجريبي للتأكد أن السيرفر شغال
app.get("/", (req, res) => {
  res.send("✅ السيرفر شغال بنجاح!");
});

// مثال لمسار كورس
app.post("/course", (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ message: "❌ كل البيانات مطلوبة" });
  }

  // هنا ممكن تحفظ البيانات في قاعدة بيانات (هنضيفها بعدين)
  res.status(200).json({
    message: "✅ تم تسجيل الاشتراك بنجاح",
    data: { name, email, course },
  });
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 السيرفر شغال على المنفذ ${PORT}`);
});
