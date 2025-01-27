
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
         <div>
             <h1 className="mt-5 text-2xl">Inside Layout</h1>
              {children}
         </div>
      
  );
}
