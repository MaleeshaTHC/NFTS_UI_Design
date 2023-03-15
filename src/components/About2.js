import React from 'react';

function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '10px' }}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button>{props.buttonText}</button>
    </div>
  );
}

function Column(props) {
  return (
    <div style={{ display: 'inline-block', verticalAlign: 'top', width: '30%', margin: '20px' }}>
      <h3>{props.title}</h3>
      {props.cards.map(card => <Card key={card.title} {...card} />)}
    </div>
  );
}

function About2() {
  const columnData = [
    {
      title: 'Column 1',
      cards: [
        {
          title: 'Card 1',
          content: 'This is the content for Card 1 in Column 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        },
        {
          title: 'Card 2',
          content: 'This is the content for Card 2 in Column 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        }
      ]
    },
    {
      title: 'Column 2',
      cards: [
        {
          title: 'Card 3',
          content: 'This is the content for Card 3 in Column 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        },
        {
          title: 'Card 4',
          content: 'This is the content for Card 4 in Column 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        }
      ]
    },
    {
      title: 'Column 3',
      cards: [
        {
          title: 'Card 5',
          content: 'This is the content for Card 5 in Column 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        },
        {
          title: 'Card 6',
          content: 'This is the content for Card 6 in Column 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          buttonText: 'Learn More'
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Welcome to our page!</h1>
      <div>
        {columnData.map(column => <Column key={column.title} {...column} />)}
      </div>
    </div>
  );
}

export default About2;