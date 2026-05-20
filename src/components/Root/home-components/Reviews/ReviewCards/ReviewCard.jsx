import "./ReviewCard.css";
import { FaStar } from "react-icons/fa6";
export default function ReviewCard({
  rate,
  reviewContent,
  initials,
  reviewer,
  role,
  color,
}) {
  return (
    <div className="review-card-container">
      <div className="review-rating">
        {Array(rate)
          .fill()
          .map((_, index) => (
            <p key={index}>
              <FaStar />
            </p>
          ))}
      </div>
      <p className="review-content">
        <i>{reviewContent}</i>
      </p>
      <div className="review-card-footer">
        <p className={`review-initials ${color}`}>{initials}</p>
        <div className="reviewer-info">
          <p className="reviewer">{reviewer}</p>
          <p className="review-role">{role}</p>
        </div>
      </div>
    </div>
  );
}
