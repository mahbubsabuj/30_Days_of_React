import Faker from "@faker-js/faker";
const CommentDetail = ({ authorName, comment, date }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={Faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {authorName}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
