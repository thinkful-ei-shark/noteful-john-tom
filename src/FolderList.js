import React from 'react'
import Folder from './Folder.js'

class FolderList extends React.Component {

    folderArray = () => {
        const newFolderArray = this.props.folders.map(folder => {
            return (
                <Folder id={folder.id} key={folder.id} name={folder.name} />
            )

        })
        return newFolderArray
    }

    render() {
        // console.log(this.props.folders)
        return (
            <ul className='folder-list'>
                {this.folderArray()}
            </ul>
        )
    }
}


export default FolderList