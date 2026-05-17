const tr = {
  nav: {
    services: "Hizmetler",
    portfolio: "Portföy",
    techStack: "Teknoloji",
    stats: "İstatistikler",
    contact: "İletişim",
  },
  hero: {
    badge: "Sistemler Aktif",
    headline: "Yeni Nesil Yapay Zeka Otomasyonu",
    subheadline:
      "İşletmenizi 7/24 çalıştıran akıllı otomasyon sistemleri tasarlıyor, geliştiriyor ve devreye alıyoruz. Manuel işlemleri hassas yapay zeka ajanlarıyla değiştirin.",
    ctaPrimary: "Otomasyona Başla",
    ctaSecondary: "Çalışmalarımızı Gör",
  },
  services: {
    sectionTitle: "Otonom Çözümler",
    sectionSubtitle:
      "Ağır işleri üstlenmek için özel araçlar geliştiriyoruz. Ölçeklenebilir, güvenilir ve yığınınıza mükemmel entegre.",
    items: [
      {
        title: "E-ticaret için Yapay Zeka Ajanları",
        description:
          "İnsan müdahalesi olmadan dönüşüm oranlarını artıran akıllı müşteri hizmetleri ve dinamik öneriler.",
      },
      {
        title: "İş Akışı Otomasyonu (n8n)",
        description:
          "Tüm iş araçlarınızı birleşik ve özerk bir sisteme bağlayan karmaşık boru hattı mimarileri.",
      },
      {
        title: "Yüksek Performanslı Web Geliştirme",
        description:
          "Mutlak maksimum hız ve kesintisiz kullanıcı deneyimi için optimize edilmiş Next.js ve Tailwind uygulamaları.",
      },
      {
        title: "Yapay Zeka Destekli SEO",
        description:
          "Sıralama fırsatlarını belirlemek ve içeriği programatik olarak optimize etmek için yapay zeka tabanlı veri analizi.",
      },
    ],
  },
  workflow: {
    sectionTitle: "İş Akışı Beyni",
    sectionSubtitle:
      "Entegre sistemlerimiz aracılığıyla verilerin nasıl özerk bir şekilde aktığını görün.",
    nodes: {
      store: "Mağaza",
      aiAgent: "Yapay Zeka",
      engine: "Motor",
      database: "Veritabanı",
      customer: "Müşteri",
    },
    badges: {
      new: "yeni",
      processing: "işleniyor",
      done: "tamamlandı",
    },
  },
  techStack: {
    sectionTitle: "Elit Teknolojiyle Güçlendirilmiş",
    sectionSubtitle:
      "Mutlak güvenilirliği sağlamak için en gelişmiş çerçevelerden ve modellerden yararlanıyoruz.",
  },
  performance: {
    sectionTitle: "Ödünsüz Hız",
    sectionSubtitle:
      "Sadece işlevsel uygulamalar değil, yıldırım hızında deneyimler inşa ediyoruz. Kullanıcı tutma ve SEO sıralaması söz konusu olduğunda her milisaniye önemlidir.",
    metrics: [
      { label: "İlk İçerikli Boyama", value: "< 0.8s" },
      { label: "Etkileşim Süresi", value: "< 2.0s" },
      { label: "Kümülatif Düzen Kayması", value: "0.00" },
    ],
    gaugeLabel: "Performans",
    gaugeCaption: "Google PageSpeed Insights Puanı — Bizim Standartımız",
  },
  portfolio: {
    sectionTitle: "Öne Çıkan Çalışmalar",
    sectionSubtitle:
      "Sadece geleceği konuşmuyoruz. İnşa ediyoruz. İlerici markalar için son dağıtımlarımızı keşfedin.",
    viewAll: "Tüm Projeleri Gör",
    projects: [
      { title: "FinTech Panosu", category: "Veri Görselleştirme" },
      { title: "Aura Commerce", category: "Yapay Zeka E-ticaret" },
      { title: "OpsFlow Ağı", category: "Otomasyon Hattı" },
      { title: "RankAI", category: "SEO Analitiği" },
    ],
  },
  stats: {
    items: [
      { value: 500, suffix: "+", label: "Otomatize Proje" },
      { value: 98, suffix: "%", label: "Müşteri Memnuniyeti" },
      { value: 10, suffix: "x", label: "Ortalama Yatırım Getirisi" },
      { value: 24, suffix: "/7", label: "Yapay Zeka Çalışma Süresi", isText: true },
    ],
  },
  footer: {
    tagline:
      "Yeni nesil Yapay Zeka Otomasyonu ve Dijital Çözümler ajansı. Yapay Zeka Ajanları tarafından desteklenen özerk iş sistemleri inşa ediyoruz.",
    nav: "Navigasyon",
    contact: "İletişim",
    privacy: "Gizlilik Politikası",
    terms: "Hizmet Şartları",
    rights: "Tüm hakları saklıdır.",
  },
  langSwitcher: {
    label: "Dil",
  },
} as const;

export default tr;
