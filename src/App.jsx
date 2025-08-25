import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Icon from '@mdi/react';
import { mdiTwitter } from '@mdi/js';

function P({text, color, id}) {
  const paragrapheStyle = {
    color: color
  }
  return <p style={paragrapheStyle} id={id}>{text}</p>
}

function Button({handleClick, text, backgroundColor, id}) {
  const stylBut = {
    backgroundColor: backgroundColor
  }
  return <button onClick={handleClick} style={stylBut} id={id}>{text}</button>
}

function Div({backgroundColor, content, otherContent, className}) {
  const styleDiv = {
    backgroundColor: backgroundColor
  }
  return <div style={styleDiv} className={className}>{content}{otherContent}</div>
}

function App() {
  const allColor = ["rgb(124, 63, 63)", "rgb(18, 53, 18)", "darkcyan", "rgb(187, 82, 135)", "darkolivegreen", "lightcoral",
    "rgb(98, 98, 248)", "rgb(152, 177, 40)", "brown", "rgb(41, 179, 144)", "cadetblue", "goldenrod", "chocolate",
    "rgb(182, 89, 228)", "rgb(204, 61, 35)", "rgb(243, 103, 22)", "darkgray"
  ]
  const allQuote = ["When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    "The most common way people give up their power is by thinking they don’t have any.",
    "The person who says it cannot be done should not interrupt the person who is doing it.",
    "Definiteness of purpose is the starting point of all achievement.",
    "People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.",
    "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    "I attribute my success to this: I never gave or took any excuse.",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    "You can’t use up creativity. The more you use, the more you have.",
    "You may be disappointed if you fail, but you are doomed if you don’t try.",
    "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
    "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."
  ]

  const authorName = ["Helen Keller", "Booker T. Washington", "Leonardo da Vinci",
    "Alice Walker", "Chinese Proverb", "W. Clement Stone", "Zig Ziglar", "John Lennon",
    "Florence Nightingale", "Booker T. Washington", "Maya Angelou", "Beverly Sills",
    "Rosa Parks", "Unknown", "Sheryl Sandberg", "Johann Wolfgang von Goethe", "Jesus"
  ]
  const index = Math.floor(Math.random()*allQuote.length);
  const [quote, setQuote] = useState(allQuote[index]);
  const [nameOfAuthor, setNameOfAuthor] = useState(authorName[index]);
  const [newIndex, setNewIndex] = useState(index);

  
  const handleNewQuote = () => {
    const index = Math.floor(Math.random()*allQuote.length);
    setQuote(allQuote[index]);
    setNameOfAuthor("- "+authorName[index]);
    setNewIndex(index);
  }

  return (
    <>
        <Div backgroundColor={allColor[newIndex]} className={"contentAll"}
          content={
            <div id='quote-box'>
            <P id='text' color={allColor[newIndex]} text={'" '+quote+' "'} />
            <P id='author' color={allColor[newIndex]} text={nameOfAuthor} />
            <div className='button-content'>
              <Div backgroundColor={allColor[newIndex]} className={'twitter-content'}
                content={<a id='tweet-quote' href='http://twitter.com/intent/tweet' target='_blanc'><Icon path={mdiTwitter} size={1.5} color="white" /></a>} />
                
              <div>
                <Button id="new-quote" handleClick={handleNewQuote} text="Next quote" backgroundColor={allColor[newIndex]} />
              </div>
            </div>
        </div>
        }
          otherContent={
            <div className='copy-right'>
              By Salohy
            </div>
          }
        />
    </>
  )
}

export default App
