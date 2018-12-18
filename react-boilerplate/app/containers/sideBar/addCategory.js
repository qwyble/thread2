import React from 'react';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';
import RenderAddCategory from '../../components/sidebarUtilities/renderAddCategory';



class AddCategory extends React.Component {

  state = {
    _loading: false,
    err: ''
  }

  handleAddCategory = (cat) => {
    if(!cat) return;
    this.setState({_loading: true, err: ''});
    axios({
      method: 'post',
      url: 'https://thread-204819.appspot.com/addCategory',
      data: { category: cat },
      withCredentials: true
    }).then((result) =>{
      this.setState({_loading:false, displayForm: false}, () => {
        this.props.getCats();
      })
    }).catch((err) => this.setState({_loading: false, err: 'category name must be unique'}));
  }


  render() {

    return (
      <div>
        {this.state._loading ?
          <Loader active />
          : (
            <div>
              <RenderAddCategory
                onAddCategory={this.handleAddCategory}
                err={this.state.err}
              />
            </div>
          )
        }
      </div>
    )
  }
}

export default AddCategory;
