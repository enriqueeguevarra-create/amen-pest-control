import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive, eco-friendly pest control services tailored for homes and businesses in Southern California.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
