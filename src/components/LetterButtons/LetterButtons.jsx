const Line1 = "QWERTYUIOP".split('');
const Line2 = "ASDFGHJKL".split('');
const Line3 = "ZXCVBNM".split('');
function LetterButtons({ buttons1, buttons2, buttons3}){

    return(
        <>
            <div className="flex flex-wrap justify-center gap-2">
                {buttons1}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {buttons2}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {buttons3}
            </div>
        </>
    )
}

export default LetterButtons;