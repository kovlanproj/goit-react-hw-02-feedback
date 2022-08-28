export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>PositiveFeedback: {positivePercentage}%</p>;
    </>
  );
};
