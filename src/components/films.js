import React, { Component } from 'react'
import { Link } from "gatsby"
import "./films.css"

export default class films extends Component {
    constructor(props) {
    super(props)
    this.state = {
         visibility: null,
    };
    this.handleClick = this.handleClick.bind(this)
}

handleClick(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value
    });
  }
    render() {
        return (
          <div className="films-wrapper">
          <div className="film-titles">
            { this.props.data.allContentfulFilms.edges.map(x => 
                <button className={this.state.visibility == x.node.slug ? "button-selected" : "button-deselected"} value={x.node.slug} onClick={this.handleClick}>{x.node.title.toUpperCase()}</button>   
                )}
          </div>
          <div className="film-info">
            { this.props.data.allContentfulFilms.edges.map(x => 
                <div className={this.state.visibility == x.node.slug ? "film-info-content-visible" : "film-info-content-invisible"}>
                <div className="film-unit-body">
                <div className="film-unit-description" dangerouslySetInnerHTML={{__html: x.node.description.childMarkdownRemark.html }} />
                <Link to={`/films/${x.node.slug}`}>WATCH</Link>
                </div>
                </div>
                )}
          </div>
          </div>
        )
    }
}







// { this.props.data.allContentfulFilms.edges.map(x => <div className="film-unit">
// <div className="film-unit-title">
// <button className={this.state.visibility == x.node.slug ? "film-unit-button-selected" : "film-unit-button-deselected"} value={x.node.slug} onClick={this.handleClick}>{x.node.title}</button>   
// </div>
// <div className={this.state.visibility == x.node.slug ? "film-unit-content-visible" : "film-unit-content-invisible"}>
// <div className="film-unit-body">
// <div className="film-unit-description" dangerouslySetInnerHTML={{__html: x.node.description.childMarkdownRemark.html }} />
// <Link to={`/films/${x.node.slug}`}>WATCH</Link>
// </div>
// </div>
// </div> )}