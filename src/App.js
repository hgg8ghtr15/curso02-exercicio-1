import './App.css';
import { Component} from "react"

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    this.carregarPosts()
  }

  carregarPosts = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => this.setState({ posts: posts }))
    
  }

  render() {
    let {posts} = this.state
    return (
      <div className="App">
          {posts.map(post => (
            <div className="Post">
              <h3 key={post.id}>{post.id} - {post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    )
  }
}
export default App;
