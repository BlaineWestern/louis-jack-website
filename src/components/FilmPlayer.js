import React, { Component } from "react"
import ReactPlayer from "react-player"
import ReactTimeout from "react-timeout"
import { findDOMNode } from "react-dom"
import screenfull from "screenfull"

import close from "../images/close.svg"
import expand from "../images/expand.svg"
import pause from "../images/pause.svg"
import play from "../images/play.svg"
import info from "../images/info.svg"

import "./film-player.css"
import "./seek-slider.css"

class FilmPlayer extends Component {
  state = {
    mouseMoving: false,
    infoVisibility: false,
    played: 0,
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  }

  setMouseMove = e => {
    e.preventDefault()
    this.setState({ mouseMoving: true })

    let timeout
    ;(() => {
      clearTimeout(timeout)
      timeout = setTimeout(() => this.setState({ mouseMoving: false }), 7000)
    })()
  }

  handleClick = e => {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value,
    })
  }

  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

  handleInfoView = () => {
    this.setState({ infoVisibility: !this.state.infoVisibility })
  }

  handleStop = () => {
    this.setState({ url: null, playing: false })
  }

  handleToggleControls = () => {
    const url = this.state.url
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    )
  }

  handleToggleLight = () => {
    this.setState({ light: !this.state.light })
  }

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }

  handleSetPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip })
  }

  handlePlay = () => {
    console.log("onPlay")
    this.setState({ playing: true })
  }

  handleEnablePIP = () => {
    console.log("onEnablePIP")
    this.setState({ pip: true })
  }

  handleDisablePIP = () => {
    console.log("onDisablePIP")
    this.setState({ pip: false })
  }

  handlePause = () => {
    console.log("onPause")
    this.setState({ playing: false })
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    console.log(parseFloat(e.target.value))
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleProgress = state => {
    console.log("onProgress", state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  handleEnded = () => {
    console.log("onEnded")
    this.setState({ playing: this.state.loop })
  }

  handleDuration = duration => {
    console.log("onDuration", duration)
    this.setState({ duration })
  }

  handleClickFullscreen = () => {
    screenfull.request(findDOMNode(this.player))
  }

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>
  }

  ref = player => {
    this.player = player
  }

  render() {
    const {
      playing,
      light,
      volume,
      muted,
      played,
      playbackRate,
      pip,
      infoVisibility,
      mouseMoving,
    } = this.state
    return (
      <div className="films-wrapper">
        <div
          className="event-listener"
          onMouseMove={e => this.setMouseMove(e)}
        />
        <div className="video-container">
          <ReactPlayer
            url={this.props.data.contentfulFilms.url}
            width="100%"
            height="100%"
            ref={this.ref}
            pip={pip}
            playing={playing}
            controls={false}
            light={light}
            loop={true}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log("onBuffer")}
            onSeek={e => console.log("onSeek", e)}
            onEnded={this.handleEnded}
            onError={e => console.log("onError", e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />
        </div>
        <div
          className={mouseMoving ? "video-controls" : "video-controls-hidden"}
        >
          <div className="film-title">
            <p>
              {this.props.data.contentfulFilms.title}(
              {this.props.data.contentfulFilms.yearMade})
            </p>
          </div>
          <button className="pause-play-button" onClick={this.handlePlayPause}>
            <img src={playing ? pause : play} />
          </button>
          <button className="info-toggle-button" onClick={this.handleInfoView}>
            <img src={info} />
          </button>
          <button
            className="expand-button"
            onClick={this.handleClickFullscreen}
          >
            <img src={expand} />
          </button>
          <div className="range-slider">
            <input
              className="input-range"
              type="range"
              step="any"
              min={0}
              max={1}
              value={played}
              onMouseDown={this.handleSeekMouseDown}
              onChange={this.handleSeekChange}
              onMouseUp={this.handleSeekMouseUp}
            />
          </div>
        </div>
        <div className={infoVisibility ? "film-template-info" : "no-display"}>
          <button
            className="info-toggle-button-close"
            onClick={this.handleInfoView}
          >
            <img src={close} />
          </button>
          <div
            className="film-description"
            dangerouslySetInnerHTML={{
              __html: this.props.data.contentfulFilms.description
                .childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </div>
    )
  }
}

export default ReactTimeout(FilmPlayer)