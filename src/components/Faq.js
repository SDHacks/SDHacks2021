import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import sdFaqData from '../data/SDHacksFAQ';

const Faq = () => {
    const data = sdFaqData;
    return (  
        <FaqWrapper>
            <Container>
            <p>frequently asked </p>
            <p className='ques'>QUESTIONS</p>

            <Row>
                {data.map((obj,i) => (<Col md={6} xs={12} key={i}>
                    <div className='card-wrapper'>
                    <div className='card-main'>
                    <div className="card-front">
                    {obj.question}
                         </div>
                         <div className="card-back">
                             <div className='back-q'>
                             {obj.question}
                             </div>
                             {obj.answer}
                         </div>
                    </div>
                    
                    </div>
                    </Col>))

                }
            </Row>


           </Container>

        </FaqWrapper>
      );
};

const FaqWrapper = styled.section`
background: #D2F6FB;
padding-top: 3rem;
h1{
  font-family: Trap;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #191826;

}
p{
  font-family: Trap;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 53px;
  color: #181727;
}

.ques{
  font-family: Trap;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 53px;
  color: #44B5C5;
     
    
}

.card-wrapper{
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000px;
  font-family: Trap;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #191826;
}


.card-main {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  -webkit-transition: -webkit-transform 0.8s; 
  transform-style: preserve-3d;
  height: 20rem;
  width: 30rem;
  margin-bottom: 2rem;
}
  

.card-wrapper:hover .card-main {
  transform: rotateY(180deg);
}

.back-q{
  font-family: Trap;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 26px;
  padding-bottom: 1rem;
  color: #44B5C5;
}

.card-front {
  padding-right:4rem;
  padding-left 3rem;
  padding-top: 8rem;
  text-align:left;
  background: #44B5C5;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  -webkit-box-shadow: 8px 8px 0px 1px #000000; 
  box-shadow: 10px 10px 0px 1px #000000;
  background-color: #44B5C5;
  color: black;
}

.card-back {
  padding-right:4rem;
  padding-left 3rem;
  padding-top: 2rem;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  text-align:left;
  font-family: Trap;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  background-color: #181727;
  color: white;
  transform: rotateY(180deg);
  box-shadow: 10px 10px 0px 1px #44B5C5;
}





@media only screen and (max-width: 800px) {
  .card-main {
    height: 20rem;
    width: 20rem;
    background: #44B5C5;
    margin-bottom: 2rem;
  }
  .card-front {
    padding-right:4rem;
    padding-left 3rem;
    padding-top: 4rem;
  }

  .card-back {
    padding-right:1rem;
    padding-left 1rem;
    padding-top: 2rem;
    font-size: 16px;
  }
}

@media only screen and (max-width: 1200px) {
  .card-main {
    height: 20rem;
    width: 20rem;
    background: #44B5C5;
    margin-bottom: 2rem;
  }

  .card-front {
    padding-right:4rem;
    padding-left 3rem;
    padding-top: 4rem;
  }

  .card-back {
    padding-right:1rem;
    padding-left 1rem;
    padding-top: 2rem;
    font-size: 16px;
  }
}
`;

export default Faq;