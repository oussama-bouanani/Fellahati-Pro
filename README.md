# Fellahati Pro — فلاحتي

تطبيق فلاحي احترافي PWA بالعربية المغربية، يعمل محلياً بـ IndexedDB ثم يزامن مع Firebase بعد تأكيد الخادم.

## التشغيل المحلي

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

املأ `.env.local` بإعدادات تطبيق الويب Firebase. هذه المفاتيح تعرّف المشروع وليست مفاتيح إدارة. لا تضع أي Service Account في الواجهة.

## إعداد Firebase

1. فعّل Email/Password وGoogle في Firebase Authentication.
2. أنشئ Firestore وانشر `firestore.rules`.
3. أضف نطاق الاستضافة إلى Authorized domains.
4. ابنِ وانشر: `pnpm build` ثم `pnpm exec firebase deploy --only firestore:rules,hosting`.

## العمل بلا إنترنت

بعد أول دخول وتحميل التطبيق، تسجَّل العمليات فوراً محلياً. تظهر حالة «محفوظ محلياً» أو «المزامنة في الانتظار»، ولا تظهر «متزامن في السحابة» إلا بعد نجاح Firestore. المزامنة تبدأ عند رجوع الشبكة، فتح التطبيق أو استئنافه، ويمكن تشغيلها يدوياً. iPhone لا يضمن مزامنة دائمة في الخلفية.

## Android وiPhone

- Android: افتح رابط HTTPS في Chrome ثم «تثبيت التطبيق».
- iPhone: افتح الرابط في Safari ثم مشاركة ← «إضافة إلى الشاشة الرئيسية».
- Capacitor: بعد `pnpm build` شغّل `pnpm exec cap add android` أو `pnpm exec cap add ios` على macOS/Xcode، ثم `pnpm exec cap sync`. لم يُنتج APK أو IPA في هذا المستودع.

## الاختبارات

- `pnpm test`: حسابات المخزون والمبيعات والمصاريف والربح.
- `pnpm test:rules`: عزل بيانات المستخدمين والتحقق من السجلات عبر Firestore Emulator.

راجع [دليل المستخدم](docs/GUIDE_AR.md) و[تقرير الاختبارات](docs/TEST_REPORT.md).
