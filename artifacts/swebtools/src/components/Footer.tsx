import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-primary font-bold text-xl leading-none">S</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                web<span className="text-primary">.Tools</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {['X', 'In', 'Gh'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t('footer.nav')}</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">{t('nav.services')}</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">{t('nav.portfolio')}</a></li>
              <li><a href="#tech" className="hover:text-primary transition-colors">{t('nav.techStack')}</a></li>
              <li><a href="#stats" className="hover:text-primary transition-colors">{t('nav.stats')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">{t('footer.contact')}</h4>
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li>hello@swebtools.com</li>
              <li>+1 (555) 000-0000</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sweb.Tools. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
