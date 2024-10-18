const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-44 py-2 px-5 bg-black text-white font-semibold hover:bg-white hover:text-black transition-all duration-500 border border-black">
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
