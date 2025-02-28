
function WordHint({wordHint}){
    return (
      <div className="flex flex-col items-center ">
        <h2 className="text-2xl m-1 font-medium border-2 border-black p-2">
          {wordHint}
        </h2>
      </div>
    );
}

export default WordHint;