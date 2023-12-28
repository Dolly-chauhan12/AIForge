const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-bl  from-slate-200 to-blue-100 dark:from-blue-950 dark:via-blue-700 dark:to-slate-700 overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
