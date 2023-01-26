import React from "react";
import { Badge, Button } from "react-bootstrap";

const TimerTwo = ({ chengTimer, flag3,num3 }) => {
  
  console.log("third")
  return (
    <div>
      <h2 className="mt-3">
        <Badge bg="danger" className="mt-3">
          {num3}
        </Badge>
      </h2>
      <Button
        variant="light"
        onClick={() => {
          if (flag3) {
            chengTimer(false,true,false)
          }
        }}
      >
        prev
      </Button>
    </div>
  );
};

export default React.memo (TimerTwo);
