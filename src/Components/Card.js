import React, { useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ques } from './Questions';
import Form from 'react-bootstrap/Form'

function CreateCard() {

  let [i, seti] = useState(0)


  function NextFun() {
      
      if(i<=4)
      {
        seti(i => i + 1)
        
      }
      else{
      alert("End of Quiz")
     // <Card.text>End of Questions</Card.text>
      }
    
  
  }

  function PrevFun() {
    
      seti(i = i - 1)
      
    }
    

  return (
  
  <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Header className="text-center">Quiz</Card.Header>
        <Card.Text>
          {ques[i].question}
        </Card.Text>

        <Form.Check
          type="radio"
          label={ques[i].options[0].a}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label={ques[i].options[0].b}
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label={ques[i].options[0].c}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />

        <Form.Check
          type="radio"
          label={ques[i].options[0].d}
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />




        <Button variant="primary" onClick={() => PrevFun()}>previous</Button><p></p>
        <Button variant="primary" onClick={() => NextFun()}>Next</Button>

      </Card.Body>
      <Card.Footer>Total Score {i} / 5</Card.Footer>
    </Card>
    </div>
)




//     <Container className="text-center">
//       <Card style={{ width: '18rem' }}>
//         <Card.Header className="text-center">Quiz</Card.Header>
//         <Card.Body>
//           {ques.map((data) => (
//             <Card.Text> {data.question}
//             </Card.Text>
//           ))}
//         </Card.Body>
//         <Button variant="primary" onClick={() => PrevFun()}>previous</Button>
//         <Button variant="primary" onClick={() => NextFun()}>Next</Button>
//         <Card.Footer>Total Questions</Card.Footer>
//       </Card>
//     </Container>
}
export default CreateCard;