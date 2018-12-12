import React from 'react';
import {Menu} from 'semantic-ui-react';
import Playlists from '../../containers/sideBar/playlists.js';


/* renders each category in the sidebar */
class CategoryMenuItem extends React.Component{
  render(){
    return(
      <div>
        {this.props.categories.map((category, key) =>
          {
            return(
              <Menu.Item className='sideItems' key={key}>
                <Playlists
                  {...this.props}
                  catName={category.catname}
                  playLists={category.pls}
                  id={category.catid}
                />
              </Menu.Item>

            )
          })
        }
      </div>
    )
  }
}


export default CategoryMenuItem;
