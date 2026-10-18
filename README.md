# Fellahati Pro — فلاحتي

تطبيق فلاحي احترافي PWA بالعربية المغربية، يعمل محلياً بـ IndexedDB ثم يزامن مع Firebase بعد تأكيد الخادم.

التطبيق المنشور: https://fellahati-pro-bouanani-2026.web.app

مشروع Firebase: `fellahati-pro-bouanani-2026` — خطة Spark المجانية.

## التشغيل المحلي

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

املأ `.env.local` بإعدادات تطبيق الويب Firebase. هذه المفاتيح تعرّف المشروع وليست مفاتيح إدارة. لا تضع أي Service Account في الواجهة.

## إعداد Firebase

المشروع الحالي مهيأ بـ Firebase Authentication وCloud Firestore في `europe-west1` وFirebase Hosting. لإعادة النشر:

1. أنشئ `.env.local` من `.env.example` وأدخل إعدادات تطبيق Firebase Web.
2. شغّل `pnpm test` ثم `pnpm build`.
3. انشر بواسطة `pnpm exec firebase deploy --only firestore:rules,firestore:indexes,hosting`.

## العمل بلا إنترنت

بعد أول دخول وتحميل التطبيق، تسجَّل العمليات فوراً محلياً. تظهر حالة «محفوظ محلياً» أو «المزامنة في الانتظار»، ولا تظهر «متزامن في السحابة» إلا بعد نجاح Firestore. المزامنة تبدأ عند رجوع الشبكة، فتح التطبيق أو استئنافه، ويمكن تشغيلها يدوياً. iPhone لا يضمن مزامنة دائمة في الخلفية.

## Android وiPhone

- Android: افتح رابط HTTPS في Chrome ثم «تثبيت التطبيق».
- iPhone: افتح الرابط في Safari ثم مشاركة ← «إضافة إلى الشاشة الرئيسية».
- Capacitor: مشروعا Android وiOS موجودان في `android/` و`ios/` ومعرّف الحزمة هو `ma.fellahati.pro`. بعد كل بناء ويب شغّل `pnpm exec cap sync`.
- Android: يتطلب Android Studio/JDK ثم إنشاء مفتاح توقيع وبناء AAB موقّع للنشر في Google Play.
- iOS: يتطلب macOS وXcode وحساب Apple Developer للتوقيع وبناء IPA ورفعه إلى App Store Connect.
- لم يُنتج AAB أو IPA موقّع قبل توفر أدوات التوقيع وحسابات المتاجر.

## الاختبارات

- `pnpm test`: حسابات المخزون والمبيعات والمصاريف والربح.
- `pnpm test:rules`: عزل بيانات المستخدمين والتحقق من السجلات عبر Firestore Emulator.

راجع [دليل المستخدم](docs/GUIDE_AR.md) و[تقرير الاختبارات](docs/TEST_REPORT.md).

## الروابط

- GitHub: https://github.com/oussama-bouanani/Fellahati-Pro
- Firebase Console: https://console.firebase.google.com/project/fellahati-pro-bouanani-2026/overview
- التطبيق: https://fellahati-pro-bouanani-2026.web.app
