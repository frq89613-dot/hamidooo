const ar = {
  nav: {
    services: "الخدمات",
    portfolio: "أعمالنا",
    techStack: "التقنيات",
    stats: "الإحصائيات",
    contact: "تواصل معنا",
    whyUs: "لماذا نحن",
    useCases: "حالات الاستخدام",
    caseStudies: "دراسات الحالة",
  },
  hero: {
    badge: "وكالة أتمتة AI",
    headline: "أتمتة الذكاء الاصطناعي وتطوير SaaS للشركات الطموحة",
    subheadline:
      "Sweb.Tools تبني أنظمة ذكية، شات بوت، ومنصات SaaS تساعدك على تسريع النمو وتقليل العمل اليدوي بفاعلية.",
    ctaPrimary: "ابدأ مشروعك الآن",
    ctaSecondary: "اكتشف خدماتنا",
  },
  services: {
    sectionTitle: "حلول ذاتية التشغيل",
    sectionSubtitle:
      "نبني أدوات متخصصة لتحمل عنك الأعباء الثقيلة. قابلة للتوسع، وموثوقة، ومتكاملة تماماً مع بنيتك التقنية.",
    items: [
      {
        title: "وكلاء الذكاء الاصطناعي للتجارة الإلكترونية",
        description:
          "خدمة عملاء ذكية وتوصيات ديناميكية ترفع معدلات التحويل دون تدخل بشري.",
      },
      {
        title: "أتمتة سير العمل (n8n)",
        description:
          "بنية أنابيب معقدة تربط جميع أدوات عملك في نظام موحّد وذاتي التشغيل.",
      },
      {
        title: "تطوير مواقع عالي الأداء",
        description:
          "تطبيقات Next.js وTailwind مُحسَّنة لأقصى سرعة وتجربة مستخدم سلسة.",
      },
      {
        title: "تحسين محركات البحث بالذكاء الاصطناعي",
        description:
          "تحليل بيانات مدفوع بالذكاء الاصطناعي لتحديد فرص التصدر وتحسين المحتوى برمجياً.",
      },
    ],
  },
  workflow: {
    sectionTitle: "دماغ سير العمل",
    sectionSubtitle:
      "شاهد كيف تتدفق البيانات بشكل ذاتي عبر أنظمتنا المتكاملة.",
    nodes: {
      store: "المتجر",
      aiAgent: "وكيل الذكاء",
      engine: "المحرك",
      database: "قاعدة البيانات",
      customer: "العميل",
    },
    badges: {
      new: "جديد",
      processing: "جارٍ المعالجة",
      done: "مكتمل",
    },
  },
  techStack: {
    sectionTitle: "مدعوم بتقنيات النخبة",
    sectionSubtitle:
      "نستخدم أحدث الأطر والنماذج لضمان موثوقية مطلقة.",
  },
  performance: {
    sectionTitle: "سرعة لا تهاون فيها",
    sectionSubtitle:
      "لا نبني تطبيقات وظيفية فحسب، بل نبني تجارب خاطفة كالبرق. كل ميلي ثانية تُحسب في الاحتفاظ بالمستخدم وترتيب SEO.",
    metrics: [
      { label: "أول عرض للمحتوى", value: "< 0.8 ث" },
      { label: "وقت التفاعل", value: "< 2.0 ث" },
      { label: "تراكم إزاحة التصميم", value: "0.00" },
    ],
    gaugeLabel: "الأداء",
    gaugeCaption: "نتيجة Google PageSpeed Insights — معيارنا الثابت",
  },
  portfolio: {
    sectionTitle: "أعمال مميزة",
    sectionSubtitle:
      "لا نتحدث عن المستقبل فحسب، بل نبنيه. اكتشف أحدث نشرياتنا للعلامات التجارية المستقبلية.",
    viewAll: "عرض جميع المشاريع",
    projects: [
      { title: "لوحة FinTech", category: "تصوير البيانات" },
      { title: "تجارة Aura", category: "تجارة إلكترونية بالذكاء الاصطناعي" },
      { title: "شبكة OpsFlow", category: "خط أنابيب الأتمتة" },
      { title: "RankAI", category: "تحليلات SEO" },
    ],
  },
  stats: {
    items: [
      { value: 500, suffix: "+", label: "مشروع مؤتمَت" },
      { value: 98, suffix: "%", label: "رضا العملاء" },
      { value: 10, suffix: "x", label: "متوسط العائد على الاستثمار" },
      { value: 24, suffix: "/7", label: "توفر الذكاء الاصطناعي", isText: true },
    ],
  },
  footer: {
    tagline:
      "وكالة متخصصة في أتمتة الذكاء الاصطناعي وتطوير SaaS. نبني حلولاً رقمية ذكية لفرق النمو والشركات العالمية.",
    nav: "التنقل",
    contact: "التواصل",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    rights: "جميع الحقوق محفوظة.",
  },
  langSwitcher: {
    label: "اللغة",
  },
} as const;

export default ar;
