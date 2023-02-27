import "./FlipCard.scss";

export function FlipCard({
  digit,
  shuffle,
  label,
  unit,
}: {
  shuffle: boolean;
  digit: number;
  label: string;
  unit: "days" | "hours" | "minutes" | "seconds";
}) {
  // assign digit values
  let currentDigit = digit;
  let previousDigit = digit + 1;
  let displayDigit = `${digit}`;
  let displayPreviousDigit = `${previousDigit}`;

  // add zero
  if (currentDigit < 10) {
    displayDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    displayPreviousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle ? displayPreviousDigit : displayDigit;
  const digit2 = !shuffle ? displayPreviousDigit : displayDigit;
  // shuffle animations
  const animation1 = shuffle ? "AnimatedCard fold" : "AnimatedCard unfold";
  const animation2 = !shuffle ? "AnimatedCard fold" : "AnimatedCard unfold";

  return (
    <div className="FlipCardWrapper">
      <div className="FlipWrapper">
        <div className="FlipCard">
          <section className="CardNumberWrapper">
            <div className="CardNumberTopHalf">
              <span className="CardNumber secondaryText">{displayDigit}</span>
            </div>
            <div className="CardNumberTopHalfOverlay"></div>

            <div className="CardNumberBottomHalf">
              <span className="CardNumber secondaryText">
                {displayPreviousDigit}
              </span>
            </div>

            <div className={animation1}>
              <span className="CardNumber secondaryText">{digit1}</span>
            </div>
            <div className={animation2}>
              <span className="CardNumber secondaryText">{digit2}</span>
            </div>
          </section>
        </div>
      </div>
      <h4 className="CardLabel primaryText">{label}</h4>
    </div>
  );
}
