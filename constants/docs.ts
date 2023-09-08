export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type Navigation = {
  title: string;
  items: NavItem[];
};

export const docsConfig: Record<string, Navigation[]> = {
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
      ],
    },
    {
      title: 'Documentation',
      items: [
        {
          title: 'Introduction',
          href: '/docs/documentation',
        },
        {
          title: 'Components',
          href: '/docs/documentation/components',
        },
        {
          title: 'Code Blocks',
          href: '/docs/documentation/code-blocks',
        },
        {
          title: 'Style Guide',
          href: '/docs/documentation/style-guide',
        },
        {
          title: 'Disabled',
          href: '/docs/in-progress',
          disabled: true,
        },
      ],
    },
  ],
};
