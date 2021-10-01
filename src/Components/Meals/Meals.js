import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    const { strMealThumb,
        strMeal,
        strCategory,idMeal } = props.meal

    const history = useHistory()

    const handleMealclick = () =>{
      history.push(`/meals/${idMeal}`)
    }
    return (
        <div className='col'>
            <Card style={{ width: '16rem' }}>
                <img  className="card-img-top" src={strMealThumb} alt='' />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strCategory} <br/>
                        <Link to='/about'>Visit me </Link>
                    </Card.Text>
                    <Button onClick={handleMealclick} variant="primary">Click me</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Meals;