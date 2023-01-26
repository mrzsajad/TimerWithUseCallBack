import React from "react";
import { Badge, Button } from "react-bootstrap";

const TimerTwo = ({ flag2, chengTimer,num2 }) => {

 console.log("second")
  return (
    <div>
      <h2 className="mt-3">
        <Badge bg="danger" className="mt-3">
          {num2}
        </Badge>
      </h2>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            chengTimer(true,false,false)
          }
        }}
      >
        prev
      </Button>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            chengTimer(false,false,true)
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default React.memo (TimerTwo);
