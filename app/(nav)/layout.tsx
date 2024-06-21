export default function NavRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="sm:px-20 px-1 mb-14 mt-2 sm:mt-5 lg:mt-14 max-w-7xl mx-auto">
      {children}
    </div>
  );
}
