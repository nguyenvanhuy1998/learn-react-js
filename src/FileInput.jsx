import React, { Component, createRef } from 'react'

export default class FileInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFile: null
    }
    this.fileInput = createRef()
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    console.log(this.state.selectedFile)
    // axios.post('api/uploadFile', formData)
  }
  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor=''>
          Upload file:
          <input type='file' name='' id='' ref={this.fileInput} onChange={this.onFileChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
