function FilteredByKeyword(props) {
  const {
    toggleKeywordForm,
    inputKeyword,
    handleSetKeyword,
    handleSetInputKeyword,
    
  } = props;

  const handleOnChange = ({ target }) => {
    handleSetInputKeyword(target.value);
  };
  const handleContinue = () => {
    if (inputKeyword !== null) {
      handleSetKeyword(inputKeyword);
      handleSetInputKeyword(null);
      toggleKeywordForm();
    } else {
      toggleKeywordForm();
    }
  };

  return (
    <div>
      <div className="relative bg-white h-96 rounded overflow-hidden flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-2/5 absolute top-0"
        >
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,96L120,128C240,160,480,224,720,218.7C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <h1 className="absolute top-10 font-bold text-4xl text-white capitalize">
          Keywords
        </h1>

        <div className="px-5 w-full">
          <input
            type="text"
            placeholder="keyword..."
            className="w-full placeholder:text-xl p-2 text-xl rounded border focus:outline-none"
            onChange={handleOnChange}
          />
        </div>

        <button
          onClick={handleContinue}
          className="absolute left-5 bottom-5  bg-orange-600 text-white py-2 px-12 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default FilteredByKeyword;
