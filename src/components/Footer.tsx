import { Instagram, Facebook, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Menu', href: '#menu' },
      { name: 'About', href: '#about' },
      { name: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: '123 Ethiopian Way', href: '#' },
      { name: 'San Francisco, CA 94102', href: '#' },
      { name: '(415) 555-0123', href: 'tel:+14155550123' },
      { name: 'hello@awazerestaurant.com', href: 'mailto:hello@awazerestaurant.com' },
    ],
  },
  {
    title: 'Hours',
    links: [
      { name: 'Tuesday - Sunday', href: '#' },
      { name: 'Lunch: 11am - 3pm', href: '#' },
      { name: 'Dinner: 5pm - 10pm', href: '#' },
      { name: 'Monday: Closed', href: '#' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">Awaze</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Experience the warmth of Ethiopian hospitality and the rich flavors 
              of our ancestral recipes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Awaze Ethiopian Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
