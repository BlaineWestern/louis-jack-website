import React, { Component } from "react"
import { Link } from "gatsby"
import "./films.css"
import playbutton from "../images/play-button.svg"

export default class films extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: null,
      expanded: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickMobile = this.handleClickMobile.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value,
    })
  }

  handleClickMobile(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value,
      expanded: !this.state.expanded,
    })
  }

  handleExpand(e) {
    e.preventDefault()
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    return (
      <div className="films-wrapper">
        <div className="mobile-film-titles">
          <button
            className="mobile-film-titles-button"
            onClick={this.handleExpand}
          >
            SELECT FILM &nbsp; {this.state.expanded ? "-" : "+"}
          </button>
          <div
            className={this.state.expanded ? "titles-open" : "titles-closed"}
          >
            {this.props.data.allContentfulFilms.edges.map(x => (
              <button
                className={
                  this.state.visibility === x.node.slug
                    ? "button-selected"
                    : "button-deselected"
                }
                value={x.node.slug}
                onClick={this.handleClickMobile}
              >
                {x.node.title.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
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
                <Link to={`/films/${x.node.slug}`}><img src={playbutton} /></Link>
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
