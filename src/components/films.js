import React, { Component } from "react"
import { Link } from "gatsby"
import "./films.css"

export default class films extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value,
    })
  }

  render() {
    return (
      <div className="films-wrapper">
        <div className="film-titles">
          {this.props.data.allContentfulFilms.edges.map(x => (
            <button
              className={
                this.state.visibility === x.node.slug
                  ? "button-selected"
                  : "button-deselected"
              }
              value={x.node.slug}
              onClick={this.handleClick}
            >
              {x.node.title.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="film-info">
          {this.props.data.allContentfulFilms.edges.map(x => (
            <div
              className={
                this.state.visibility == x.node.slug
                  ? "film-info-content-visible"
                  : "film-info-content-invisible"
              }
            >
              <div className="film-unit-body">
                <p>"{x.node.title.toUpperCase()}"</p>
                <Link to={`/films/${x.node.slug}`}>WATCH &nbsp; &#9654;</Link>
                <br />
                <br />
                <p>DESCRIPTION:</p>
                <div
                  className="film-unit-description"
                  dangerouslySetInnerHTML={{
                    __html: x.node.description.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
