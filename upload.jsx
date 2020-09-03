import React, { Component } from 'react'
import ReactFileReader from 'react-file-reader';
class Upload extends Component {
    state = {  }
    handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Use reader.result
            alert(reader.result)
        }
        reader.readAsText(files[0]);
    }
    render() { 
        return ( <div>
            <ReactFileReader handleFiles={this.handleFiles} fileTypes={''}>
    <button className='btn btn-success'>Upload</button>
    <p>{this.handleFiles}</p>
</ReactFileReader>
        </div> );
    }
}
 
export default Upload;