import { useState } from "react";
const ApprovalCard = (props) => {
  const [show, handleShow] = useState(false);
  const handleApprove = () => {
    handleShow((prevState) => !prevState.show);
  };
  return show ? (
    props.children
  ) : (
    <div className="ui card">
      <div className="content"> {props.children} </div>
      <div className="extra content">
        <div className="two buttons ui">
          <div className="ui basic green button" onClick={handleApprove}>
            Accept
          </div>
          <div className="ui basic red button" onClick={handleApprove}>
            Reject
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
