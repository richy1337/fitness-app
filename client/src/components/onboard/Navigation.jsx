import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Navigation({
    steps,
    currentIndex,
    incrementIndex,
    decrementIndex,
    handleSubmit,
}) {
    return (
        <div className="flex justify-between p-4">
            <button
                onClick={decrementIndex}
                disabled={currentIndex === 0}
                className="bg-gray-200 rounded p-2"
            >
                <ArrowBackIosNewIcon />
            </button>
            {currentIndex === steps.length - 1 ? (
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={incrementIndex}
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Next
                </button>
            )}
        </div>
    );
}

export default Navigation;
