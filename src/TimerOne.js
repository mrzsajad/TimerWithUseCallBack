import React  from "react";
import { Badge, Button } from "react-bootstrap";

const TimerOne = ({ flag1,chengTimer,num1 }) => {
 console.log("first")
  return (
    <div>
      <h2 className="mt-3">
        <Badge bg="danger" className="mt-3">
          {num1}
        </Badge>
      </h2>
      <Button
        variant="light"
        onClick={() => {
          if (flag1) {
            chengTimer(false,true,false)
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default React.memo (TimerOne);
