const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="border-t border-2 dark:border-white border-custom-black flex-grow mx-4"></div>
      <p className="text-xl font-bold text-center mx-10">
        {heading.toUpperCase()}
      </p>
      <div className="border-t border-2 dark:border-white border-custom-black flex-grow mx-4"></div>
    </div>
  );
};

export default SectionHeading;
