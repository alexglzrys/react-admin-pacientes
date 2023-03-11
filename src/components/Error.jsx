export const Error = ({ children }) => {
  return (
    <div className="text-center bg-red-800 text-white font-bold uppercase rounded-md p-3 mb-7">
      {children}
    </div>
  );
};
