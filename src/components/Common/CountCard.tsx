import React from 'react'
import { Card, CardBody } from 'react-bootstrap';
import styles from './CountCard.module.css'; 

interface CountCardProps {
  title: string;
  count: any;
}

const CountCard : React.FC<CountCardProps>  = ( {title ,count }) => {
  return (
    <Card className={`h-100 ${styles.countCard}`}>
        <CardBody>
            <span>{title}</span>
              <h1 className="mt-2">{count}</h1>
        </CardBody>
    </Card>
  )
}

export default CountCard