type AppLayoutProps = {
  children: React.ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <main>
      <div className="container mx-auto min-h-screen p-5">{children}</div>
    </main>
  );
}

export default AppLayout;
