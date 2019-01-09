import React from 'react';
import axios from 'axios';
import {Button} from 'semantic-ui-react';


class DeleteSongs extends React.Component{

  handleDeleteSongs = () => {
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/deleteSongs',
      data: {
        songIds: this.props.selectedSongs
      },
      withCredentials: true
    }).then(() => this.props.onRefresh());
  }


  render(){
    return(
    )
  }
}


export default DeleteSongs;
