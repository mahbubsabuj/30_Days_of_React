import "./App.css";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

function App() {
  return (
    <div className="container comments ui">
      <ApprovalCard>
        <CommentDetail
          authorName={"mahbub"}
          comment={"Good job!"}
          date={"Yeasterday at 6:00PM"}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName={"Sabuj"}
          comment={"Very Helpful post Indeed!"}
          date={"Today at 7:00PM"}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
