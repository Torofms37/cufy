
export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="bg-global p-tx w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-2 line w-3/6 h-auto rounded-2xl">
        <h1 className="text-5xl text-center font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
};
