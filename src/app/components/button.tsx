const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-44 py-2 px-5  button bg-custom-black text-white font-semibold hover:bg-white hover:text-custom-black transition-all duration-500 border border-custom-black">
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
