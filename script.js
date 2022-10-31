const quotes = [
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    quote: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray"
  },
  {
    quote: "It's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot"
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain"
  },
  {
    quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington"
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  }
]

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const Text = props => {
  return <div id="text">{props.text}</div>
}

const Author = props => {
  return <span id="author">{props.text}</span>
}

const Tweet = props => {
  return (
    <a
      id="tweet-quote"
      className="button"
      href={"https://www.twitter.com/intent/tweet".concat(props.tweet)}
      target="_blank"
    >
      <i className="fab fa-twitter" />
    </a>
  )
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    this.props.handleClick()
  }

  render() {
    return (
      <button onClick={this.handleClick} type="button" id="new-quote">
        {this.props.children}
      </button>
    )
  }
}

class QuoteBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quote: this.props.quote,
      author: this.props.author
    }
  }

  handleClick = () => {
    let index = getRandomInt(quotes.length)
    do {
      index = getRandomInt(quotes.length)
    }
    while (this.state.quote === quotes[index].quote)

    this.setState(prevState => ({
      quote: quotes[index].quote,
      author: quotes[index].author
    }))
  }

  render() {
    return (
      <div id="quote-box">
        <blockquote>
          <Text text={this.state.quote} />
          <cite>
            <Author text={this.state.author} />
          </cite>
          <div id="action">
            <Tweet
              tweet={encodeURI(
                "?hashtags=quotes&related=freeCodeCamp&text="
                  .concat(this.state.quote)
                  .concat(" ")
                  .concat(this.state.author)
              )}
            />
            <Button handleClick={this.handleClick}>New quote</Button>
          </div>
        </blockquote>
      </div>
    )
  }
}

class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <QuoteBox
        quote="There is nothing better than a friend, unless it is a friend with chocolate."
        author="Linda Grayson"
      />
    )
  }
}

ReactDOM.render(<Quote />, document.getElementById("app"))
