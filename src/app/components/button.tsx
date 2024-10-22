const Button = ({ text }: { text: string }) => {
  return (
    <button className="w-44 py-2 px-5 dark:border-white  button dark:bg-white bg-custom-black dark:text-custom-black text-white font-semibold dark:hover:bg-custom-black dark:hover:text-white  hover:bg-white hover:text-custom-black transition-all duration-500 border border-custom-black">
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
